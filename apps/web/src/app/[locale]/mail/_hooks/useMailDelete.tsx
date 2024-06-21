import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Toast } from '@/shared/ui'
import deleteMails from '@/services/mail/deleteMails'
import { useTranslations } from 'next-intl'

const useMailDelete = () => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: deleteMutate } = useMutation({
    mutationKey: [MUTATION_KEY.DELETE_MAILS],
    mutationFn: (ids: number[]) => deleteMails(ids),
    onSuccess: (_, ids: number[]) => {
      const queryKeys = [QUERY_KEY.MAIL_BOX, QUERY_KEY.MAILS]
      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
      Toast.success($t('moved_mail', { length: ids.length }))
    },
    onError: () => {
      Toast.error($t('delete_mail_fail'))
    },
  })

  return {
    deleteMutate,
  }
}

export default useMailDelete
