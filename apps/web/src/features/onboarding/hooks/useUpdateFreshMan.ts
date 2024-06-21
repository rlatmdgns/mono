import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateFreshMan } from '@/features/onboarding/api/updateFreshMan'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'

import { Toast } from '@repo/ui'
import { UpdateFreshManRequest } from '@/entities/onboarding/types'

export const useUpdateFreshMan = (id: number) => {
  const queryClient = useQueryClient()
  const { mutate: updateFreshManMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_FRESHMAN],
    mutationFn: (data: UpdateFreshManRequest) => updateFreshMan(id, data),
    onSuccess: () => {
      Toast.success('변경되었습니다.')
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.FRESHMEN],
      })
    },
    onError: () => {
      Toast.error('변경에 실패했습니다.')
    },
  })
  return {
    updateFreshManMutate,
  }
}
