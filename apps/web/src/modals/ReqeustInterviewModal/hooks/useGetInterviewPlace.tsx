import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import getInterviewPlace from '@/services/interview/getInterviewPlace'

const useGetInterviewPlace = () => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.INTERVIEW_PLACE],
    queryFn: getInterviewPlace,
  })
  return {
    data,
  }
}

export default useGetInterviewPlace
