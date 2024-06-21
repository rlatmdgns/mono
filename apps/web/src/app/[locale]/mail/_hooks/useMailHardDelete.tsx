import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import hardDeleteMails from '@/services/mail/hardDeleteMails'
import { Toast } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const useMailHardDelete = () => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: hardDeleteMutate } = useMutation({
    mutationKey: [MUTATION_KEY.HARD_DELETE_MAILS],
    mutationFn: (ids: number[]) => hardDeleteMails(ids),
    onSuccess: () => {
      const queryKeys = [QUERY_KEY.MAIL_BOX, QUERY_KEY.MAILS]

      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
      Toast.success($t('deleted_mail_forever_success'))
    },
    onError: () => {
      Toast.error($t('deleted_mail_forever_fail'))
    },
  })

  return {
    hardDeleteMutate,
  }
}

export default useMailHardDelete
