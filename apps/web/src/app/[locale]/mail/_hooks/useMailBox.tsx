import { API_URL, QUERY_KEY } from '@/shared/constants'
import { useQuery } from '@tanstack/react-query'
import { http } from '@/shared/lib/http'
import { MailBox } from '@/interface/mail'

const useMailBox = (initialData: MailBox) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.MAIL_BOX],
    queryFn: () => http.get<MailBox>(API_URL.MAIL_BOX),
    initialData: initialData,
  })
  return {
    data,
  }
}

export default useMailBox
