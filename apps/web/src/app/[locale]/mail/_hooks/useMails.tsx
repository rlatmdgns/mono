import { QUERY_KEY } from '@/shared/constants'
import { useQuery } from '@tanstack/react-query'
import getMails from '@/services/mail/getMails'
import { MailsRequest, MailsResponse } from '@/interface/mail'

const useMails = (initialData: MailsResponse, params: MailsRequest) => {
  const { data, refetch } = useQuery({
    queryKey: [QUERY_KEY.MAILS],
    queryFn: () => getMails(params),
    initialData,
    enabled: !!params,
  })

  return {
    data,
    refetch,
  }
}

export default useMails
