import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import storePostingLocker from '@/services/postingLocker/storePostingLocker'
import { useTranslations } from 'next-intl'

const useStorePosting = (postingId: number) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: storePostingMutate } = useMutation({
    mutationKey: [MUTATION_KEY.STORE_POSTING_LOCKER, postingId],
    mutationFn: () => storePostingLocker(postingId),
    onSuccess: () => {
      const queryKeys = [
        QUERY_KEY.POSTING,
        `${postingId}`,
        QUERY_KEY.POSTING_LOCKER,
        QUERY_KEY.SIDE_BAR,
      ]
      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })

      Toast.success($t('announcement_archived_success'))
    },
    onError: () => {
      Toast.error($t('announcement_archived_fail'))
    },
  })
  return {
    storePostingMutate,
  }
}

export default useStorePosting
