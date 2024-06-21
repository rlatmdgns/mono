import {
  EvaluationAllMethodLabel,
  EvaluationMethodLabel,
} from '@/modals/evaluation/evaluation.interface'
import {
  EvaluationTableArticle,
  EvaluationTableSection,
} from '@/features/Evaluation/Evaluation.interface'
import { EvaluationMember } from '@/interface/evaluation'
import { PostingMemberResponse } from '@/interface/posting'
import { FieldValues } from 'react-hook-form'
import { AUTHORITY } from '@/shared/constants'

export const getEvaluationMethodMenuPosition = (containerRef: HTMLDivElement | null) => {
  if (!containerRef) {
    return {
      top: 0,
      left: 0,
    }
  }

  const {
    width: containerWidth,
    height: containerHeight,

    y: containerOffsetTop,
    x: containerOffsetLeft,
  } = containerRef.getBoundingClientRect()
  const MODAL_HEIGHT = 248
  const LABEL_HEIGHT = 32
  const GAP = 8
  const SCROLL_THRESHOLD_PERCENTAGE = 65

  const isTopDirection =
    (containerOffsetTop / window.innerHeight) * 100 > SCROLL_THRESHOLD_PERCENTAGE
  const topDirectionTop = containerOffsetTop - MODAL_HEIGHT - GAP
  const bottomDirectionTop = containerOffsetTop + containerHeight + GAP + LABEL_HEIGHT

  return {
    top: isTopDirection ? topDirectionTop : bottomDirectionTop,
    left: containerOffsetLeft,
    width: containerWidth,
  }
}

export const filterMethodWithOutComment = (
  method: EvaluationAllMethodLabel,
): EvaluationMethodLabel => {
  if (method.includes('Comment')) {
    return method.slice(0, -7) as EvaluationMethodLabel
  }
  return method as EvaluationMethodLabel
}

export const getEvaluationArticleLength = (sections?: EvaluationTableSection[]) => {
  if (!sections) return 0
  const articles = sections.map(
    (section: any) =>
      section.evaluation_items.filter((item: EvaluationTableArticle) => item.item_type !== 'essay')
        .length,
  )
  return articles.reduce((acc: number, cur: number) => {
    return acc + cur
  }, 0)
}

export const getEvaluationMemberCanView = (member: EvaluationMember) => {
  const isEvaluator = member.user_authority === AUTHORITY.EVALUATOR
  if (!isEvaluator) {
    return true
  }
  if (isEvaluator && member.hasOwnProperty('can_view')) {
    return Boolean(member.can_view)
  }
  return false
}

export const convertToEvaluationMembers = (data?: PostingMemberResponse) => {
  const postingMembers = data ? [...data.admin_member, ...data.posting_member] : []
  return postingMembers.map((postingMember) => {
    return {
      identification: postingMember.identification,
      user_name: postingMember.user_name,
      user_authority: postingMember.user_authority,
      user_profile: postingMember.user_profile,
      can_view: postingMember.user_authority !== AUTHORITY.EVALUATOR,
    }
  }) as EvaluationMember[]
}

export const getUpdateEvaluationMemberForm = (form: FieldValues) => {
  const evaluationMembers = form.evaluationMembers.map((member: EvaluationMember) => {
    return {
      identification: member.identification,
      can_view: getEvaluationMemberCanView(member),
    }
  })
  return {
    evaluation_members: evaluationMembers,
    is_anonymous: form.isAnonymous,
  }
}
