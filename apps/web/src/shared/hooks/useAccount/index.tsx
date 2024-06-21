import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import { UserInfo } from '@/interface/user'
import updateAccountInfo from '@/services/auth/updateAccountInfo'

export const useAccount = () => {
  const queryClient = useQueryClient()

  const { mutate: updateAccountMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_USER],
    mutationFn: (data: UserInfo) => updateAccountInfo(data),
    onSuccess: () => {
      Toast.success('계정이 수정되었습니다.')
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.USER],
      })
    },
    onError: () => {
      Toast.error('계정 수정이 실패하였습니다.')
    },
  })

  return {
    updateAccountMutate,
  }
}
