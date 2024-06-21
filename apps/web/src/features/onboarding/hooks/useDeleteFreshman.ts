import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteFreshman } from '@/features/onboarding/api/deleteFreshman'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@repo/ui'
import { DeleteFreshMenRequest } from '@/entities/onboarding/types'

export const useDeleteFreshman = (callBackFn: () => void) => {
  const queryClient = useQueryClient()
  const { mutate: deleteFreshmanMutate } = useMutation({
    mutationKey: [MUTATION_KEY.DELETE_FRESHMAN],
    mutationFn: (ids: DeleteFreshMenRequest) => deleteFreshman(ids),
    onSuccess: () => {
      callBackFn()
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.FRESHMEN],
      })
    },
    onError: () => {
      Toast.error('입사자 삭제에 실패했습니다.')
    },
  })
  return {
    deleteFreshmanMutate,
  }
}
