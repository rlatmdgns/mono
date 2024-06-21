'use client'

import InterviewBadge from '@/app/[locale]/postings/_components/InterviewBadge'
import StateView from '@/app/[locale]/postings/_components/StateView'
import { useAuthority, useModal } from '@/shared/hooks'
import { AUTHORITY, MODAL } from '@/shared/constants'
import { Applicant } from '@/interface/applicants'
import { ellipsisText, getDaysAgo } from '@/shared/lib/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import {
  evaluationIdAtom,
  isVoteViewAtom,
  selectApplicantCardsAtom,
} from '@/app/[locale]/postings/_recoil'
import * as Styles from './styles'
import EvaluationState from '@/app/[locale]/postings/_components/EvaluationState'
import { CheckBoxIcon, TagList } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface ApplicantCardProps {
  applicant: Applicant
  index: number
  isSelected?: boolean
  isGhosting?: boolean
  isFinalPass?: boolean
  isEvaluationMember: boolean
  evaluationId?: number
}

const ApplicantCard = ({
  applicant,
  index,
  isSelected,
  isGhosting,
  isFinalPass,
  isEvaluationMember,
  evaluationId,
}: ApplicantCardProps) => {
  const { openModal } = useModal()
  const pathname = usePathname() as string
  const router = useRouter()

  const {
    step_id,
    applicant_name,
    applicant_email,
    interview_schedule,
    application_date,
    applicant_re_url,
    applicant_state,
    applicant_id,
    vote_fail_count,
    vote_pass_count,
    is_public,
    applicant_history,
    evaluation_state,
    evaluation_identification_list,
  } = applicant

  const isVote = useRecoilValue(isVoteViewAtom)
  const [selectApplicantCards, setSelectApplicantCards] = useRecoilState(selectApplicantCardsAtom)
  const setEvaluationId = useSetRecoilState(evaluationIdAtom)

  const names = selectApplicantCards.map((item) => item.applicant_name).join(', ')

  const $t = useTranslations('announcement_detail')
  const daysSinceApplication = getDaysAgo(application_date)
    ? $t('application_ago', {
        day: getDaysAgo(application_date),
      })
    : $t('application_today')
  const isFail = applicant_state === 2
  const isCancel = interview_schedule?.interview_state === 'canceled'

  const { authority } = useAuthority()
  const isEvaluation = authority === AUTHORITY.EVALUATOR
  const isInaccessible = isEvaluation && !is_public

  const searchParams = useSearchParams()
  const applicantId = searchParams?.get('applicant')

  const isDragDisabled =
    isEvaluation ||
    interview_schedule?.interview_state === 'ongoing' ||
    interview_schedule?.interview_state === 'scheduled'

  const isInclude = selectApplicantCards?.some(
    (applicantCard) => String(applicantCard.applicant_id) === String(applicant.applicant_id),
  )

  const filterApplicantCards = selectApplicantCards?.filter(
    (applicantCard) => String(applicantCard.applicant_id) !== String(applicant.applicant_id),
  )

  const multiSelectTo = (applicant: Applicant) => {
    if (isInclude) {
      return setSelectApplicantCards(filterApplicantCards)
    }
    setSelectApplicantCards([
      ...selectApplicantCards,
      { ...applicant, schedule: interview_schedule?.interview_state },
    ])
  }

  const wasToggleInSelectionGroupKeyUsed = (event: KeyboardEvent) => {
    const userAgent = navigator.userAgent
    const isUsingWindows = /Windows/.test(userAgent)
    return isUsingWindows ? event.ctrlKey : event.metaKey
  }

  const handleClick = (event: any) => {
    if (isInaccessible) return
    if (!wasToggleInSelectionGroupKeyUsed(event)) {
      openModal(MODAL.APPLICANT_MODAL, {
        applicantId: applicant_id,
      })
      router.replace(`${pathname}?applicant=${applicant_id}`)
      setSelectApplicantCards([])
      return
    }
    multiSelectTo(applicant)
  }

  const handleMouseDown = () => {
    if (!evaluationId) return
    setEvaluationId(evaluationId)
  }

  const handleSelect = (event: React.MouseEvent<HTMLElement>) => {
    if (isEvaluation) return
    event.stopPropagation()
    multiSelectTo(applicant)
  }

  useEffect(() => {
    if (!applicantId) return
    openModal(MODAL.APPLICANT_MODAL, {
      applicantId,
    })
  }, [applicantId])

  return (
    <Draggable draggableId={`${applicant_id}`} index={index} isDragDisabled={isDragDisabled}>
      {(provided, snapshot) => {
        const isMultiDrag = snapshot.isDragging && selectApplicantCards?.length > 1

        return (
          <Styles.Card
            className="applicant"
            data-stepid={step_id}
            data-applicant={applicant_id}
            data-name={applicant_name}
            data-email={applicant_email}
            data-fail={isFail}
            data-schedule={interview_schedule?.interview_state || null}
            data-evaluationstate={evaluation_state}
            data-evaluationid={evaluationId}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            $isGhosting={isGhosting}
            $isFail={isFail || isCancel}
            $isInaccessible={isInaccessible}
            onClick={handleClick}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            <Styles.Content>
              <Styles.Top>
                <Styles.Left>
                  {!isEvaluation && (
                    <div onClick={handleSelect}>
                      <CheckBoxIcon checked={isSelected} />
                    </div>
                  )}
                  <Styles.Name>{ellipsisText(applicant_name)}</Styles.Name>
                  <StateView
                    isVote={isVote}
                    url={applicant_re_url}
                    passCount={vote_pass_count}
                    failCount={vote_fail_count}
                    isInaccessible={isInaccessible}
                    applicantHistory={applicant_history}
                  />
                </Styles.Left>
                <InterviewBadge
                  schedule={interview_schedule}
                  isFail={isFail}
                  isFinalPass={isFinalPass}
                />
              </Styles.Top>
              <TagList tags={applicant.applicant_tag} isInaccessible={isInaccessible} />
              <Styles.Bottom>
                <Styles.Day>{daysSinceApplication}</Styles.Day>
                <EvaluationState
                  isFail={isFail}
                  isInaccessible={isInaccessible}
                  isEvaluationMember={isEvaluationMember}
                  evaluationState={evaluation_state}
                  evaluationIdentificationList={evaluation_identification_list}
                />
              </Styles.Bottom>
            </Styles.Content>
            {isMultiDrag && (
              <Styles.MultiScreen>
                <Styles.NameWrapper>{names}</Styles.NameWrapper>
                <Styles.Count>{selectApplicantCards?.length}</Styles.Count>
              </Styles.MultiScreen>
            )}
          </Styles.Card>
        )
      }}
    </Draggable>
  )
}

export default React.memo(ApplicantCard)
