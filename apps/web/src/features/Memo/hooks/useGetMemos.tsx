import { QUERY_KEY } from '@/shared/constants'
import getApplicantMemo from '@/services/applicant/getApplicantMemo'
import { useQuery } from '@tanstack/react-query'

const useGetMemos = (applicantId: string) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.APPLICANT_MEMO, applicantId],
    queryFn: () => getApplicantMemo(applicantId),
  })

  return {
    data,
  }
}

export default useGetMemos
