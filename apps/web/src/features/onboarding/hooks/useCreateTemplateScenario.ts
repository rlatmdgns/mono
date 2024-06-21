import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, PAGE } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import { createTemplateScenario } from '@/features/onboarding/api/createTemplateScenario'
import { useRouter } from 'next/navigation'

export const useCreateTemplateScenario = (id?: number | string) => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const { mutate: createTemplateScenarioMutate } = useMutation({
    mutationKey: [MUTATION_KEY.POST_SCENARIO],
    mutationFn: (data: any) => createTemplateScenario(data, id),
    onSuccess: () => {
      Toast.success(`시나리오가 ${id ? '수정' : '생성'} 되었습니다.`)
      return router.push(PAGE.SCENARIOS)
    },
    onError: () => {
      Toast.error('시나리오 생성에 실패하였습니다.')
    },
  })

  return {
    createTemplateScenarioMutate,
  }
}
