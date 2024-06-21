import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import getNotification from '@/services/getNotification'

const useGetAlarm = () => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.ALARM],
    queryFn: () => getNotification(),
  })

  return {
    data,
  }
}

export default useGetAlarm
