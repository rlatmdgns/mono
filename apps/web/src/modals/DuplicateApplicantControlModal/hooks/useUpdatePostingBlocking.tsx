import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import updatePostingBlocking from '@/services/posting/updatePostingBlocking'
import { Toast } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const useUpdatePostingBlocking = (postingId: number, callbackFn?: () => void) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()

  const { mutate: updatePostingBlockingMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_POSTING_BLOCKING],
    mutationFn: (data: string) => updatePostingBlocking(postingId, data),
    onSuccess: () => {
      Toast.success($t('change_support_limit_setting_success'))
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POSTING, `${postingId}`],
      })
      if (callbackFn) {
        callbackFn()
      }
    },
    onError: () => {
      Toast.error($t('change_support_limit_setting_fail'))
    },
  })

  return { updatePostingBlockingMutate }
}

export default useUpdatePostingBlocking
