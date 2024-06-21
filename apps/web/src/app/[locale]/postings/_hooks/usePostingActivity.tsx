import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import postingActivity from '@/services/posting/postingActivity'
import { useTranslations } from 'next-intl'

const usePostingActivity = (posting_id: string, handleConfirmStatus: (status: boolean) => void) => {
  const $t = useTranslations('announcement_detail.setting')
  const queryClient = useQueryClient()
  const { mutate: postingActivityMutate } = useMutation({
    mutationKey: [MUTATION_KEY.POSTING_ACTIVITY],
    mutationFn: () => postingActivity(posting_id),
    onSuccess: (result) => {
      Toast.success(
        !result.activate_state
          ? $t('announcement.deactivate_description')
          : $t('announcement.activate_description'),
      )

      handleConfirmStatus(false)

      const queryKeys = [QUERY_KEY.POSTING, `${posting_id}`, QUERY_KEY.SIDE_BAR]
      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({
          queryKey: [key],
        })
      })
    },
  })
  return {
    postingActivityMutate,
  }
}

export default usePostingActivity
