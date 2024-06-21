import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY } from '@/shared/constants'
import { CloseEvaluationRequest } from '@/services/evaluation/closeEvaluation/closeEvaluation.interface'
import { Toast } from '@/shared/ui'
import closeEvaluation from '@/services/evaluation/closeEvaluation'
import { useTranslations } from 'next-intl'

const useCloseEvaluation = (callbackFn?: () => void) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: closeEvaluationMutate } = useMutation({
    mutationKey: [MUTATION_KEY.CLOSE_EVALUATION],
    mutationFn: (data: CloseEvaluationRequest) => closeEvaluation(data),
    onSuccess: () => {
      Toast.success($t('evaluation_deadline_success'))
      if (callbackFn) {
        callbackFn()
      }
    },
  })
  return {
    closeEvaluationMutate,
  }
}

export default useCloseEvaluation
