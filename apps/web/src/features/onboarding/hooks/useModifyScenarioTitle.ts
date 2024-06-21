import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { updateScenarioTitle } from '@/features/onboarding/api/updateScenarioTitle'
import { Toast } from '@/shared/ui'
import { TemplateScenarioTitle } from '@/entities/onboarding/types'

export const useModifyScenarioTitle = (id: number, onClose: () => void) => {
  const queryClient = useQueryClient()

  const { mutate: updateScenarioTitleMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_SCENARIO_TITLE],
    mutationFn: (data: TemplateScenarioTitle) => updateScenarioTitle(id, data),
    onSuccess: () => {
      Toast.success('시나리오명이 수정되었습니다.')
      onClose()
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.TEMPLATE_SCENARIOS],
      })
    },
    onError: () => {
      Toast.error('시나리오명 변경에 실패하였습니다.')
    },
  })

  return {
    updateScenarioTitleMutate,
  }
}
