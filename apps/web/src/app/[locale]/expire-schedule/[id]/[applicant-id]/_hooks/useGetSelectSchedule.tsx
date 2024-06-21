import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import getInterviews from '@/services/interview/getInterviews'

export const useGetSelectSchedule = (interviewCode: string, applicantId: string) => {
  const { data, error } = useQuery({
    queryKey: [QUERY_KEY.INTERVIEW, interviewCode, applicantId],
    queryFn: () => getInterviews(interviewCode, applicantId),
  })
  return {
    data,
    error,
  }
}
