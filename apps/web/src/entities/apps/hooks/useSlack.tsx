import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import { GetConnectSlackResponse } from '@/entities/apps/types/slack'
import { getConnectSlack } from '@/entities/apps/api/getConnectSlack'

export const useSlack = (initialData: GetConnectSlackResponse) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.CONNECT_SLACK],
    queryFn: getConnectSlack,
    initialData,
  })

  return {
    data,
  }
}
