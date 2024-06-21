import { QUERY_KEY } from '@/shared/constants'
import { useSuspenseQuery } from '@tanstack/react-query'
import getApplicants from '@/services/applicant/getApplicants'
import { ApplicantsRequest, ApplicantsResponse } from '@/interface/applicants'

const useApplicants = (
  postingId: string,
  initialApplicants: ApplicantsResponse,
  payload: ApplicantsRequest,
) => {
  const { data, refetch } = useSuspenseQuery({
    queryKey: [QUERY_KEY.APPLICANTS, postingId],
    queryFn: () => getApplicants(postingId, { ...payload }),
    initialData: initialApplicants,
  })

  return {
    data,
    refetch,
  }
}

export default useApplicants
