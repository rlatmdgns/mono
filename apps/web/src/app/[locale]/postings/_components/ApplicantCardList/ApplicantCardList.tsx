'use client'

import React from 'react'
import * as Styles from './styles'
import { Applicant } from '@/interface/applicants'
import ApplicantCard from '@/app/[locale]/postings/_components/ApplicantCard'
import { draggingIdAtom, selectApplicantCardsAtom } from '@/app/[locale]/postings/_recoil'
import { useRecoilValue } from 'recoil'
import { Droppable } from 'react-beautiful-dnd'

interface ApplicantListProps {
  stepId: string
  applicants: Applicant[]
  isEvaluationMember: boolean
  isDocumentSubmission?: boolean
  isFinalPass?: boolean
  evaluationId?: number
}

const ApplicantCardList = ({
  applicants,
  stepId,
  isDocumentSubmission,
  isFinalPass,
  isEvaluationMember,
  evaluationId,
}: ApplicantListProps) => {
  const selectApplicantCards = useRecoilValue(selectApplicantCardsAtom)
  const draggingId = useRecoilValue(draggingIdAtom)

  const currentStepApplicants = applicants.filter((applicant) => {
    return String(applicant.step_id) === String(stepId)
  })

  return (
    <Droppable droppableId={stepId} isCombineEnabled={false} type="COLUMN" direction="vertical">
      {(provided, snapshot) => (
        <Styles.CardList
          ref={provided.innerRef}
          {...provided.droppableProps}
          $isDragging={snapshot.isDraggingOver}
          $isDocumentSubmission={isDocumentSubmission}
        >
          {currentStepApplicants.map((applicant, index) => {
            const isSelected = selectApplicantCards?.some(
              (applicantCard) =>
                String(applicantCard.applicant_id) === String(applicant.applicant_id),
            )

            const isGhosting =
              isSelected && Boolean(draggingId) && draggingId !== String(applicant.applicant_id)

            return (
              <li key={applicant.applicant_id}>
                <ApplicantCard
                  applicant={applicant}
                  index={index}
                  isSelected={isSelected}
                  isGhosting={isGhosting}
                  isFinalPass={isFinalPass}
                  isEvaluationMember={isEvaluationMember}
                  evaluationId={evaluationId}
                />
              </li>
            )
          })}
          {provided.placeholder}
        </Styles.CardList>
      )}
    </Droppable>
  )
}

export default React.memo(ApplicantCardList)
