import {
  EvaluationTableArticle,
  EvaluationTableSection,
} from '@/features/Evaluation/Evaluation.interface'
import { SubmitEvaluationSection } from '@/services/evaluation/submitEvaluation/submitEvaluation.interface'
import { getReduceArray } from '@/features/Evaluation/Evaluation.factory'
import { getNumberToFixed } from '@/shared/lib/utils'

export const getItemValues = (items: EvaluationTableArticle[]) => {
  return items.map((item) => {
    return {
      item_id: item.item_id,
      item_type: item.item_type,
      item_score: undefined,
      item_subjective: '',
    }
  })
}

export const getDefaultFormValues = (sections?: EvaluationTableSection[]) => {
  if (!sections) return []
  return sections.map((section) => {
    return {
      section_id: section.section_id,
      evaluation_items: getItemValues(section.evaluation_items),
    }
  })
}

export const isValidForm = (sections?: SubmitEvaluationSection[]) => {
  if (!sections) return false

  const evaluationItems = sections.map((section) => section.evaluation_items).flat()
  return evaluationItems.every((item) => {
    if (item.item_type === 'essay') return !!item.item_subjective
    return item.item_score !== undefined
  })
}

export const convertToPercent = (sections?: SubmitEvaluationSection[]) => {
  if (!sections)
    return {
      score: 0,
      totalScore: 0,
      percentage: 0,
    }
  const scoreItems = sections
    .map((section) => section.evaluation_items.filter((item) => item.item_type !== 'essay'))
    .flat()
  const score = getReduceArray(scoreItems.map((item) => item.item_score || 0))
  const totalScore = scoreItems.length * 10
  const percentage = getNumberToFixed((score / totalScore) * 100)

  return { score, totalScore, percentage }
}
