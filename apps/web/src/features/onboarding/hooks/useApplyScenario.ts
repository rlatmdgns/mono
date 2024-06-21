import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import { applyScenarios } from '@/features/onboarding/api/applyScenarios'
import { ApplyScenarioForFreshmenRequest } from '@/entities/onboarding/types'

export const useApplyScenario = (id: number) => {
  const queryClient = useQueryClient()

  const { mutate: applyScenarioMutate } = useMutation({
    mutationKey: [MUTATION_KEY.POST_SCENARIO],
    mutationFn: (data: ApplyScenarioForFreshmenRequest) => applyScenarios(id, data),
    onSuccess: () => {
      Toast.success('시나리오가 적용 되었습니다.')
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.SCENARIO],
      })
    },
    onError: () => {
      Toast.error('시나리오 적용에 실패하였습니다.')
    },
  })

  return {
    applyScenarioMutate,
  }
}
