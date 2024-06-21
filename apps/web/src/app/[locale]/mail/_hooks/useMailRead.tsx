import { useQueryClient } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import { MailsResponse } from '@/interface/mail'

const useMailRead = (id?: string) => {
  const queryClient = useQueryClient()

  const readUpdate = () => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MAIL_BOX] })
    return queryClient.setQueryData([QUERY_KEY.MAILS], (prevData?: MailsResponse) => {
      if (!prevData) {
        return
      }
      const prevMailList = prevData?.mail_list?.data
      const newMailList = prevMailList?.map((mail) => {
        if (String(mail.mail_id) === id) {
          return {
            ...mail,
            mail_reader: 1,
          }
        }
        return mail
      })
      return {
        ...prevData,
        mail_list: {
          ...prevData?.mail_list,
          data: newMailList,
        },
      }
    })
  }

  return { readUpdate }
}

export default useMailRead
