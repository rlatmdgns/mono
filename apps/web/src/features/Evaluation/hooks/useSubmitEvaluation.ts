import submitEvaluation from '@/services/evaluation/submitEvaluation/submitEvaluation'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import { SubmitEvaluationRequest } from '@/services/evaluation/submitEvaluation/submitEvaluation.interface'
import { useTranslations } from 'next-intl'

const useSubmitEvaluation = (
  evaluation_id: string,
  applicant_id: string,
  table_id: string,
  callbackFn: () => void,
) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: submitEvaluationMutate } = useMutation({
    mutationKey: [MUTATION_KEY.SUBMIT_EVALUATION],
    mutationFn: (data: SubmitEvaluationRequest) => submitEvaluation(data),
    onSuccess: () => {
      Toast.success($t('evaluation_registration_success'))
      const queryKeys = [QUERY_KEY.EVALUATION_MEMBERS_RESULT, evaluation_id, applicant_id, table_id]
      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
      callbackFn()
    },
    onError: () => {
      Toast.error($t('evaluation_registration_fail'))
    },
  })
  return {
    submitEvaluationMutate,
  }
}

export default useSubmitEvaluation
