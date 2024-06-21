import { MODAL } from '@/shared/constants'
import { Dropdown, Toast } from '@/shared/ui'

import { applicantIdAtom, evaluationStateAtom } from '@/modals/ApplicantModal/recoil'

import { ApplicantPostingStep } from '@/services/applicant/getApplicantModal/getApplicantModal.interface'
import { InterviewState } from '@/interface/interview'

import { useModal } from '@/shared/hooks'
import useUpdateApplicantLocationInModal from '@/modals/ApplicantModal/hooks/useUpdateApplicantLocationInModal'

import UpdateStepDropdownButton from '@/modals/ApplicantModal/components/ApplicantModalSidebar/UpdateStepButton/UpdateStepDropdownButton'
import UpdateStepOption from '@/modals/ApplicantModal/components/ApplicantModalSidebar/UpdateStepButton/UpdateSteoOption'

import { useRecoilValue } from 'recoil'
import { useLocale, useTranslations } from 'next-intl'

interface UpdateStepButtonProps {
  stepId: string
  steps: ApplicantPostingStep[]
  applicantName: string
  postingId: number
  interviewState: InterviewState
}

const UpdateStepButton = ({
  stepId,
  steps,
  applicantName,
  postingId,
  interviewState,
}: UpdateStepButtonProps) => {
  const applicantId = useRecoilValue(applicantIdAtom)
  const evaluationState = useRecoilValue(evaluationStateAtom)

  const { openModal, closeModal } = useModal()
  const { updateApplicantLocationMutate } = useUpdateApplicantLocationInModal(
    `${postingId}`,
    applicantId,
  )

  const $t = useTranslations()
  const currentLocale = useLocale()
  const updateStep = (step: ApplicantPostingStep) => {
    updateApplicantLocationMutate({
      applicant_id: applicantId,
      step_id: step.step_id,
    })
    closeModal(MODAL.CONFIRM)
  }

  const getMoveText = (step_name: string) => {
    if (currentLocale !== 'ko') {
      return (
        <>
          Move "{applicantName}" applicant to {step_name} stage?
        </>
      )
    }
    return (
      <>
        “{applicantName}” 지원자를 {step_name} 단계로
        <br /> 이동하시겠습니까?
      </>
    )
  }

  const handleUpdateStep = (step: ApplicantPostingStep) => {
    if (interviewState === 'scheduled' || interviewState === 'ongoing') {
      const interviewStateText =
        interviewState === 'scheduled' ? $t('interview.scheduled') : $t('interview.processing')
      return Toast.warning($t('messages.not_change_step_interview_state', { interviewStateText }))
    }
    if (evaluationState === 'proceeding') {
      return Toast.warning($t('messages.evaluation_deadline_after_change_step'))
    }
    openModal(MODAL.CONFIRM, {
      state: 'positive',
      title: getMoveText(step.step_name),
      textConfirm: $t('common.confirm'),
      textCancel: $t('common.close'),
      iconSource: 'icon/check-solid',
      onClick: () => updateStep(step),
    })
  }

  return (
    <Dropdown button={<UpdateStepDropdownButton />} isNotPortal direction="left">
      {steps.map((step) => (
        <UpdateStepOption
          key={step.step_id}
          selectedStepId={stepId}
          step={step}
          onUpdateStep={handleUpdateStep}
        />
      ))}
    </Dropdown>
  )
}

export default UpdateStepButton
