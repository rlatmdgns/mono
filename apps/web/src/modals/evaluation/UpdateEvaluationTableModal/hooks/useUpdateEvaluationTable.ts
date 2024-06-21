import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import updateEvaluationTable from '@/services/evaluation/updateEvaluationTable'
import { UpdateEvaluationTableRequest } from '@/services/evaluation/updateEvaluationTable/updateEvaluationTable.interface'
import { Toast } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const useUpdateEvaluationTable = () => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: updateEvaluationTableMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_EVALUATION_TABLE],
    mutationFn: (data: UpdateEvaluationTableRequest) => updateEvaluationTable(data),

    onSuccess: () => {
      Toast.success($t('modify_evaluation_table_success'))
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.EVALUATION] })
    },
    onError: () => {
      Toast.error($t('modify_evaluation_table_fail'))
    },
  })
  return {
    updateEvaluationTableMutate,
  }
}

export default useUpdateEvaluationTable
