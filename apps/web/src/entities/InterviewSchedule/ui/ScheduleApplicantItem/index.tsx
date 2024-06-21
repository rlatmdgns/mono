import * as Styles from './styles'
import { Applicant } from '@/interface/schedules'
import { useModal } from '@/shared/hooks'
import { Toast } from '@/shared/ui'
import { MODAL } from '@/shared/constants'
import { useSetRecoilState } from 'recoil'
import { ApplicantsIdsAtom } from '@/modals/ReqeustInterviewModal/recoil/atom'

interface ScheduleApplicantItemProps {
  applicant: Applicant
}

export const ScheduleApplicantItem = ({ applicant }: ScheduleApplicantItemProps) => {
  const { openModal } = useModal()
  const setRequestInterviewApplicantsId = useSetRecoilState(ApplicantsIdsAtom)

  const handleClick = () => {
    if (applicant.is_deleted) {
      return Toast.error('삭제된 지원자입니다.')
    }

    setRequestInterviewApplicantsId([`${applicant.applicant_id}`])
    openModal(MODAL.APPLICANT_MODAL, {
      applicantId: applicant.applicant_id,
    })
  }

  return (
    <Styles.Wrapper onClick={handleClick}>
      <Styles.Text>
        {applicant?.applicant_name} {applicant.is_deleted && `(삭제됨)`}
      </Styles.Text>
    </Styles.Wrapper>
  )
}
