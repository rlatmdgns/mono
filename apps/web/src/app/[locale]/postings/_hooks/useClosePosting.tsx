import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import closePosting from '@/services/posting/closePosting'
import { useTranslations } from 'next-intl'

const useClosePosting = (postingId: number) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: closePostingMutate } = useMutation({
    mutationKey: [MUTATION_KEY.CLOSE_POSTING],
    mutationFn: () => closePosting(postingId),
    onSuccess: (result) => {
      Toast.success(
        result.close_state
          ? $t('announcement_deadline_success')
          : $t('announcement_deadline_cancel'),
      )

      const queryKeys = [QUERY_KEY.POSTING, `${postingId}`, QUERY_KEY.SIDE_BAR]
      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({
          queryKey: [key],
        })
      })
    },
  })
  return {
    closePostingMutate,
  }
}

export default useClosePosting
