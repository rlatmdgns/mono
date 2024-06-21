import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import createEvaluationTable from '@/services/evaluation/createEvaluationTable/createEvaluationTable'
import { CreateEvaluationTableRequest } from '@/services/evaluation/createEvaluationTable/createEvaluationTable.interface'
import { Toast } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const useCreateEvaluationTable = (callbackFn: (table_id: number) => void) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: createEvaluationTableMutate } = useMutation({
    mutationKey: [MUTATION_KEY.CREATE_EVALUATION_TABLE],
    mutationFn: (data: CreateEvaluationTableRequest) => createEvaluationTable(data),

    onSuccess: (result) => {
      Toast.success($t('create_scorecard_success'))
      callbackFn(result.table_id)

      const queryKeys = [QUERY_KEY.EVALUATION, QUERY_KEY.APPLICANTS]
      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
    },
    onError: (error) => {
      if (error?.message) {
        return Toast.error(error.message)
      }
      Toast.error($t('create_scorecard_fail'))
    },
  })
  return {
    createEvaluationTableMutate,
  }
}

export default useCreateEvaluationTable
