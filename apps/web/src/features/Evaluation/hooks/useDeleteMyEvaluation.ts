import deleteMyEvaluation from '@/services/evaluation/deleteMyEvaluation'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const useDeleteMyEvaluation = (
  evaluation_id: string,
  applicant_id: string,
  table_id: string,
  callbackFn: () => void,
) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: deleteMyEvaluationMutate } = useMutation({
    mutationKey: [MUTATION_KEY.DELETE_MY_EVALUATION],
    mutationFn: () => deleteMyEvaluation(evaluation_id, applicant_id, table_id),
    onSuccess: () => {
      Toast.success($t('evaluation_delete_success'))
      const queryKeys = [QUERY_KEY.EVALUATION_MEMBERS_RESULT, evaluation_id, applicant_id, table_id]
      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
      callbackFn()
    },
    onError: () => {
      Toast.error($t('evaluation_delete_fail'))
    },
  })
  return { deleteMyEvaluationMutate }
}

export default useDeleteMyEvaluation
