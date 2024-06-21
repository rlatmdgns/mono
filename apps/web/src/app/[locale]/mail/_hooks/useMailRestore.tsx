import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Toast } from '@/shared/ui'
import restoreMails from '@/services/mail/restoreMails'
import { useTranslations } from 'next-intl'

const useMailDelete = () => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: restoreMutate } = useMutation({
    mutationKey: [MUTATION_KEY.RESTORE_MAILS],
    mutationFn: (ids: number[]) => restoreMails(ids),
    onSuccess: () => {
      const queryKeys = [QUERY_KEY.MAIL_BOX, QUERY_KEY.MAILS]

      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
      Toast.success($t('restore_mail_success'))
    },
    onError: () => {
      Toast.error($t('restore_mail_fail'))
    },
  })

  return {
    restoreMutate,
  }
}

export default useMailDelete
