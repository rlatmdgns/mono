import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import updateMyEvaluation from '@/services/evaluation/updateMyEvaluation'
import { SubmitEvaluationRequest } from '@/services/evaluation/submitEvaluation/submitEvaluation.interface'
import { Toast } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const useUpdateMyEvaluation = (evaluation_id: string, applicant_id: string, table_id: string) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: updateMyEvaluationMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_MY_EVALUATION],
    mutationFn: (data: SubmitEvaluationRequest) => updateMyEvaluation(data),
    onSuccess: () => {
      Toast.success($t('evaluation_modify_success'))
      const queryKeys = [
        QUERY_KEY.EVALUATION_MEMBERS_RESULT,
        QUERY_KEY.EVALUATION_MEMBER_RESULT,
        QUERY_KEY.EVALUATION_MY_RESULT,
        evaluation_id,
        applicant_id,
        table_id,
      ]
      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
    },
    onError: () => {
      Toast.error($t('evaluation_modify_fail'))
    },
  })
  return {
    updateMyEvaluationMutate,
  }
}

export default useUpdateMyEvaluation
