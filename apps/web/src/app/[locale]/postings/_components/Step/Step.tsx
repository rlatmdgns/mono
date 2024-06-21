'use client'

import React from 'react'
import { Applicant, PostingStep } from '@/interface/applicants'
import * as Styles from '@/app/[locale]/postings/_components/Step/styles'
import StepHeader from '@/app/[locale]/postings/_components/StepHeader'
import ApplicantCardList from '@/app/[locale]/postings/_components/ApplicantCardList/ApplicantCardList'
import AddApplicantDirectly from '@/app/[locale]/postings/_components/AddApplicantDirectly'
import AddStep from '@/app/[locale]/postings/_components/AddStep'
import { useAuthority } from '@/shared/hooks'
import { AUTHORITY } from '@/shared/constants'

interface StepProps {
  postingId: string
  total: number
  step: PostingStep
  applicants: Applicant[]
  index: number
}

const Step = ({ postingId, total, step, applicants, index }: StepProps) => {
  const { authority } = useAuthority()

  const isDocumentSubmission = index === 0
  const isAdditionalArea = total - 2 === index
  const isFinalPass = total - 1 === index
  const isEvaluator = authority === AUTHORITY.EVALUATOR

  return (
    <Styles.Item $isAdditionalArea={isAdditionalArea} $isEvaluator={isEvaluator}>
      <StepHeader
        postingId={postingId}
        step={step}
        applicants={applicants}
        isDocumentSubmission={isDocumentSubmission}
        isFinalPass={isFinalPass}
      />
      <AddApplicantDirectly isDocumentSubmission={isDocumentSubmission} />
      <ApplicantCardList
        stepId={step.step_id}
        applicants={applicants}
        isDocumentSubmission={isDocumentSubmission}
        isFinalPass={isFinalPass}
        isEvaluationMember={step.is_evaluation_member}
        evaluationId={step.evaluation_v2_id}
      />
      <AddStep isAdditionalArea={isAdditionalArea} postingId={postingId} />
    </Styles.Item>
  )
}

export default React.memo(Step)
