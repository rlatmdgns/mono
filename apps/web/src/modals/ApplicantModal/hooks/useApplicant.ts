import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import getApplicant from '@/services/applicant/getApplicant'

const useApplicant = (applicant_id: string, isEvaluator?: boolean) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.APPLICANT, `${applicant_id}`],
    queryFn: () => getApplicant(applicant_id),
    enabled: !!applicant_id && !isEvaluator,
  })
  return { data }
}

export default useApplicant
