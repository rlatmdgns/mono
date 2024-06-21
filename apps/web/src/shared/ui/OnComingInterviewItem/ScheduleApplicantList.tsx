import { InterviewScheduleApplicant } from '@/interface/schedules'
import * as Styles from './styles'
import { Icon } from '@repo/ui'

interface ScheduleApplicantListProps {
  applicants?: InterviewScheduleApplicant[]
}

export const ScheduleApplicantList = ({ applicants }: ScheduleApplicantListProps) => {
  if (!applicants) return null

  const applicantLength = applicants.length
  const applicantNames = applicants.map((applicant: InterviewScheduleApplicant, index) => {
    return `${applicant.applicant_name}${applicant.is_deleted ? `(삭제됨)` : ''}${applicantLength > index + 1 ? ', ' : ''}`
  })

  return (
    <Styles.InterviewScheduleApplicants>
      <Icon icon="icon/member-solid" color="blue500" />
      <Styles.Text> {applicantNames}</Styles.Text>
    </Styles.InterviewScheduleApplicants>
  )
}
