import React, { useEffect, useState } from 'react'
import * as Styles from './styles'
import { Applicant, PostingStep } from '@/interface/applicants'
import { useRecoilState } from 'recoil'
import { selectApplicantCardsAtom } from '@/app/[locale]/postings/_recoil'
import StepMenu from '@/app/[locale]/postings/_components/StepMenu'
import { useAuthority } from '@/shared/hooks'
import { AUTHORITY } from '@/shared/constants'
import { CheckBoxIcon } from '@/shared/ui'

interface StepHeaderProps {
  postingId: string
  step: PostingStep
  applicants: Applicant[]
  isDocumentSubmission: boolean
  isFinalPass: boolean
}

const StepHeader = ({
  postingId,
  step,
  applicants,
  isDocumentSubmission,
  isFinalPass,
}: StepHeaderProps) => {
  const [checked, setChecked] = useState(false)
  const [selectApplicants, setSelectApplicants] = useRecoilState(selectApplicantCardsAtom)

  const { authority } = useAuthority()
  const isEvaluation = authority === AUTHORITY.EVALUATOR

  const currentStepApplicants = applicants.filter(
    (applicant) => String(applicant.step_id) === String(step.step_id),
  )
  const otherStepSelectApplicants = selectApplicants.filter(
    (applicant) => applicant.step_id !== step.step_id,
  )
  const selectStepApplicants = selectApplicants.filter(
    (applicant) => applicant.step_id === step.step_id,
  )

  const isAllSelect =
    currentStepApplicants.length > 0 && currentStepApplicants.length === selectStepApplicants.length

  const handleSelectStepApplicants = () => {
    if (currentStepApplicants.length < 1) return
    setChecked(!checked)

    if (checked) return setSelectApplicants(otherStepSelectApplicants)
    setSelectApplicants([...selectApplicants, ...currentStepApplicants])
  }

  useEffect(() => {
    if (selectApplicants.length < 1) {
      return setChecked(false)
    }
  }, [selectApplicants])

  return (
    <Styles.Header>
      <Styles.Info>
        {!isEvaluation && (
          <CheckBoxIcon checked={checked || isAllSelect} onClick={handleSelectStepApplicants} />
        )}
        <Styles.Title>{step.step_name}</Styles.Title>
        <Styles.Count>{step.applicant_count}</Styles.Count>
      </Styles.Info>
      <StepMenu
        postingId={postingId}
        step={step}
        isDocumentSubmission={isDocumentSubmission}
        isFinalPass={isFinalPass}
      />
    </Styles.Header>
  )
}

export default StepHeader
