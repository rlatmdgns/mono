import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { createAtsFreshMan } from '@/features/onboarding/api/createAtsFreshMan'
import { Toast } from '@/shared/ui'
import { CreateFreshManRequest } from '@/entities/onboarding/types'

export const useCreateAtsFreshMan = (callBackFn: () => void) => {
  const queryClient = useQueryClient()

  const { mutate: createFreshManMutate } = useMutation({
    mutationKey: [MUTATION_KEY.CREATE_ATS_FRESHMAN],
    mutationFn: (data: CreateFreshManRequest[]) => createAtsFreshMan(data),
    onSuccess: () => {
      Toast.success('지원자가 등록되었습니다.')
      callBackFn()
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.FRESHMEN],
      })
    },
    onError: () => {
      Toast.error('지원자 추가에 실패하였습니다.')
    },
  })

  return {
    createFreshManMutate,
  }
}
