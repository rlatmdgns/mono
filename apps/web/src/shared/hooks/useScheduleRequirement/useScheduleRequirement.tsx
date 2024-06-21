import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import getScheduleRequirement from '@/services/interview/getScheduleRequirement'
import { Applicant } from '@/interface/applicants'
import { PostingMember } from '@/interface/posting'

export const useScheduleRequirement = (id?: string) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.SCHEDULE_REQUIREMENT, id],
    queryFn: () => getScheduleRequirement(id),
    enabled: !!id,
  })
  const applicantOptions = createApplicantOptions(data?.applicant)

  const enterpriseMembers = [...(data?.admin_member || []), ...(data?.posting_member || [])]
  const attendantOptions = createAttendantOptions(enterpriseMembers)

  return {
    data,
    applicantOptions,
    attendantOptions,
  }
}

const createApplicantOptions = (applicants?: Applicant[]) => {
  if (!applicants) return []

  return applicants.map((applicant) => ({
    value: applicant.applicant_id,
    label: `${applicant.applicant_name} <${applicant.applicant_email}>`,
    name: applicant.applicant_name,
  }))
}

const createAttendantOptions = (members?: PostingMember[]) => {
  if (!members) return []

  return members.map((member) => ({
    value: member.identification,
    label: member.user_name,
    image: member.user_profile,
    name: member.user_name,
  }))
}
