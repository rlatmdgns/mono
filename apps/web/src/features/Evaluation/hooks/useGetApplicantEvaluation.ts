import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import getApplicantEvaluation from '@/services/evaluation/getApplicantEvaluation/getApplicantEvaluation'

const useGetApplicantEvaluation = (posting_id: string, applicant_id: string) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.APPLICANT_EVALUATION, posting_id, applicant_id],
    queryFn: () => getApplicantEvaluation(posting_id, applicant_id),
    enabled: !!posting_id && !!applicant_id,
  })

  return {
    data,
  }
}

export default useGetApplicantEvaluation
