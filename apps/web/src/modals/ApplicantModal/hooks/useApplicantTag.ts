import getApplicantTag from '@/services/applicantTag/getApplicantTag'
import { QUERY_KEY } from '@/shared/constants'
import { useQuery } from '@tanstack/react-query'
import { ApplicantTagResponse } from '@/services/applicantTag/getApplicantTag/getApplicantTag.interface'

const useApplicantTag = (applicant_id: string) => {
  const { data } = useQuery<ApplicantTagResponse>({
    queryKey: [QUERY_KEY.APPLICANT_TAG, applicant_id],
    queryFn: () => getApplicantTag(applicant_id),
    enabled: !!applicant_id,
  })
  return { data }
}

export default useApplicantTag
