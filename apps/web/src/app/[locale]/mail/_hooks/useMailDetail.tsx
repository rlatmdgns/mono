import { QUERY_KEY } from '@/shared/constants'
import { useQuery } from '@tanstack/react-query'
import getMailDetail from '@/services/mail/getMailDetail/getMailDetail'
import { MailDetailResponse } from '@/interface/mail'

const useMailDetail = (id?: string, initialData?: MailDetailResponse) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.MAIL_DETAIL, id],
    queryFn: () => getMailDetail(id),
    enabled: !!id,
    initialData,
  })

  return {
    data,
  }
}

export default useMailDetail
