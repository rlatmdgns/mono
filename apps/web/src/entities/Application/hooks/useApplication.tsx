import { QUERY_KEY } from '@/shared/constants'
import { useQuery } from '@tanstack/react-query'
import { getApplication } from '@/entities/Application/api/getApplication'
import { ApplicationResponse } from '@/entities/Application/types'

export const useApplication = (applicant_id: string) => {
  const { data } = useQuery<ApplicationResponse>({
    queryKey: [QUERY_KEY.APPLICATION, applicant_id],
    queryFn: () => getApplication(applicant_id),
    enabled: !!applicant_id,
  })

  return {
    data,
  }
}
