import { useQuery } from '@tanstack/react-query'
import getMailComponent from '@/services/mail/getMailComponent'
import { QUERY_KEY } from '@/shared/constants'

const useMailComponent = (id?: string) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.MAIL_COMPONENT, id],
    queryFn: () => getMailComponent(id),
    enabled: !!id,
  })
  return {
    data,
  }
}

export default useMailComponent
