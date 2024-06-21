import StepButtons from '@/modals/ReqeustInterviewModal/components/InterviewFooter/components/StepButtons'
import { MAX_STEP } from '@/modals/ReqeustInterviewModal/RequestInterviewModal.constants'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
  ApplicantsIdsAtom,
  InterviewerAtom,
  InterviewInformationAtom,
  InterviewRequestStepAtom,
  InterviewTimeAtom,
} from '../../recoil/atom'
import * as Styles from './styles'
import requestInterview from '@/services/interview/requestInterview/requestInterview'
import { Toast } from '@/shared/ui'
import {
  CurrentContactPlaceAtom,
  CurrentInterviewPlaceAtom,
} from '@/shared/ui/LocationSelect/recoil/atom'
import { useTranslations } from 'next-intl'
import { useModal } from '@/shared/hooks'
import { MODAL } from '@/shared/constants'

interface InterviewFooterProps {
  id: string
  onClose: () => void
}

const InterviewFooter = ({ id, onClose }: InterviewFooterProps) => {
  const { openModal, closeModal } = useModal()

  const [requestStep, setRequestStep] = useRecoilState(InterviewRequestStepAtom)

  // 메일 전송용 데이터
  const currentContactPlace = useRecoilValue(CurrentContactPlaceAtom)
  const currentInterviewPlace = useRecoilValue(CurrentInterviewPlaceAtom)
  const applicantIds = useRecoilValue(ApplicantsIdsAtom)
  const interviewer = useRecoilValue(InterviewerAtom)
  const interviewTime = useRecoilValue(InterviewTimeAtom)
  const interviewInformation = useRecoilValue(InterviewInformationAtom)
  const $t = useTranslations('messages')

  const handleCurrentStepChange = (type: string) => {
    type === 'prev' && requestStep > 1 && setRequestStep((prev) => prev - 1)
    type === 'next' && requestStep < MAX_STEP && setRequestStep((prev) => prev + 1)
  }

  const handleInterviewSubmit = async () => {
    const postData = {
      applicant: [...applicantIds],
      interview_address:
        currentInterviewPlace.type === 'contact'
          ? currentContactPlace.address
          : currentInterviewPlace.desc,
      interview_detail_address:
        currentInterviewPlace.type === 'contact' ? currentContactPlace.detail_address : '',
      interview_guide: interviewInformation,
      interviewer: [...interviewer],
      interview_date: { ...interviewTime },
      interview_type: currentInterviewPlace.type,
    }

    const response = await requestInterview(id, postData)
    if (!response.success) {
      Toast.error($t('request_interview_fail'))
      return
    }
    Toast.success($t('request_interview_success'))
    handleModalClose()
  }
  const handleModalClose = () => {
    onClose()
    closeModal(MODAL.REQUEST_INTERVIEW_CONFIRM)
  }

  const handleModalConfirm = () => {
    openModal(MODAL.REQUEST_INTERVIEW_CONFIRM, {
      length: applicantIds.length,
      onClose: () => onClose(),
      onClick: handleInterviewSubmit,
    })
  }

  return (
    <Styles.InterviewFooter>
      <StepButtons
        onChangeCurrentStep={handleCurrentStepChange}
        onConfirmModal={handleModalConfirm}
      />
    </Styles.InterviewFooter>
  )
}

export default InterviewFooter
