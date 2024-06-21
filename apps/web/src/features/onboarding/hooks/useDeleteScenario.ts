import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import { deleteScenario } from '@/features/onboarding/api/deleteScenario'

export const useDeleteScenario = (id: number, onClose: () => void) => {
  const queryClient = useQueryClient()

  const { mutate: deleteScenarioMutate } = useMutation({
    mutationKey: [MUTATION_KEY.DELETE_SCENARIO],
    mutationFn: () => deleteScenario(id),
    onSuccess: () => {
      Toast.success('시나리오가 삭제되었습니다.')
      onClose()
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.TEMPLATE_SCENARIOS],
      })
    },
    onError: () => {
      Toast.error('시나리오 삭제에 실패하였습니다.')
    },
  })

  return {
    deleteScenarioMutate,
  }
}
