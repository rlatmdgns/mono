import * as Styles from './styles'
import { MODAL } from '@/shared/constants'
import { IconBoxButton, Toast } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { applicantIdAtom, applicantModalSidebarIsFoldAtom } from '@/modals/ApplicantModal/recoil'
import { ApplicantsIdsAtom } from '@/modals/ReqeustInterviewModal/recoil/atom'
import { useModal } from '@/shared/hooks'
import { ApplicantResponse } from '@/services/applicant/getApplicant/getApplicant.interface'
import { useTranslations } from 'next-intl'

interface MailBoxHistoryButtonBoxProps {
  applicant?: ApplicantResponse
  postingId: number
  isEvaluator: boolean
  applicantState: number
}

const MailBoxHistoryButtonBox = ({
  applicant: applicantData,
  postingId,
  isEvaluator,
  applicantState,
}: MailBoxHistoryButtonBoxProps) => {
  const { openModal, closeModal } = useModal()
  const applicantId = useRecoilValue(applicantIdAtom)
  const setRequestInterviewApplicantsId = useSetRecoilState(ApplicantsIdsAtom)
  const applicantInfo = applicantData?.applicant
  const isFail = applicantState === 2
  const $t = useTranslations()

  const handleInterviewRequest = () => {
    if (isFail) {
      return Toast.error($t('messages.interview_request_disabled_for_failed_applicant'))
    }
    openModal(MODAL.REQUEST_INTERVIEW, {
      id: postingId,
      title: $t('interview_request.title'),
      onclick: () => {
        closeModal(MODAL.REQUEST_INTERVIEW)
      },
    })
    setRequestInterviewApplicantsId([applicantId])
  }

  const handleMailWrite = () => {
    openModal(MODAL.WRITE_MAIL, {
      id: `${postingId}`,
      applicant: {
        label: `${applicantInfo?.applicant_name} <${applicantInfo?.applicant_email}>`,
        value: applicantId,
        name: applicantInfo?.applicant_name,
      },
    })
  }

  const isFold = useRecoilValue(applicantModalSidebarIsFoldAtom)

  if (isEvaluator) return null

  if (isFold) {
    return (
      <Styles.Wrapper $isFold={isFold}>
        <IconBoxButton
          size="xs"
          icon="icon/calendar-solid"
          state="standard"
          onClick={handleInterviewRequest}
        />
        <IconBoxButton
          size="xs"
          icon="icon/mail-solid"
          state="standard"
          onClick={handleMailWrite}
        />
      </Styles.Wrapper>
    )
  }

  return (
    <Styles.Wrapper>
      <Styles.Button onClick={handleInterviewRequest}>
        <Icon icon="icon/calendar-solid" color="neutralGray500" />
        {$t('interview.request_interview')}
      </Styles.Button>
      <Styles.Divider />
      <Styles.Button onClick={handleMailWrite}>
        <Icon icon="icon/mail-solid" color="neutralGray500" />
        {$t('mail.write_mail')}
      </Styles.Button>
    </Styles.Wrapper>
  )
}

export default MailBoxHistoryButtonBox
