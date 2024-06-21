import deleteEvaluationTable from '@/services/evaluation/deleteEvaluationTable/deleteEvaluationTable'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const useDeleteEvaluationTable = (evaluation_id: string, table_id: string) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: deleteEvaluationTableMutate } = useMutation({
    mutationKey: [MUTATION_KEY.DELETE_EVALUATION_TABLE],
    mutationFn: () => deleteEvaluationTable(evaluation_id, table_id),
    onSuccess: () => {
      Toast.success($t('delete_evaluation_table_success'))
      const queryKeys = [QUERY_KEY.EVALUATION, QUERY_KEY.APPLICANTS]
      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
    },
    onError: () => {
      Toast.error($t('delete_evaluation_table_fail'))
    },
  })
  return {
    deleteEvaluationTableMutate,
  }
}

export default useDeleteEvaluationTable
