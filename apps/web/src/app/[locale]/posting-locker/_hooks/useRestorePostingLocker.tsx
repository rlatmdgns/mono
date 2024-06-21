import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import restorePostingLocker from '@/services/postingLocker/restorePostingLocker'

const useRestorePostingLocker = (id?: string) => {
  const queryClient = useQueryClient()
  const { mutate: restoreMutate } = useMutation({
    mutationKey: [MUTATION_KEY.RESTORE_POSTING_LOCKER, id],
    mutationFn: (id: number) => restorePostingLocker(id),
    onSuccess: () => {
      const queryKeys = [QUERY_KEY.POSTING, `${id}`, QUERY_KEY.POSTING_LOCKER, QUERY_KEY.SIDE_BAR]
      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({
          queryKey: [key],
        })
      })
      Toast.success('공고가 복구되었습니다.')
    },
    onError: () => {
      Toast.error('공고 복구에 실패했습니다.')
    },
  })
  return { restoreMutate }
}

export default useRestorePostingLocker
