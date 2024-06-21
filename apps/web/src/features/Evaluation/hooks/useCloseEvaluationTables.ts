import { Toast } from '@/shared/ui'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import closeEvaluationTables from '@/services/evaluation/closeEvaluationTables/closeEvaluationTables'
import { CloseEvaluationTablesRequest } from '@/services/evaluation/closeEvaluationTables/closeEvaluationTables.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'

const useCloseEvaluationTables = (
  posting_id?: string,
  evaluation_id?: string,
  applicant_id?: string,
  table_id?: string,
  callbackFn?: () => void,
) => {
  const $t = useTranslations()
  const queryClient = useQueryClient()

  const { mutate: closeEvaluationTableMutate } = useMutation({
    mutationKey: [MUTATION_KEY.CLOSE_EVALUATION_TABLES],
    mutationFn: (data: CloseEvaluationTablesRequest) => closeEvaluationTables(data),
    onSuccess: (result) => {
      const queryKeys = [
        QUERY_KEY.APPLICANTS,
        QUERY_KEY.EVALUATION,
        QUERY_KEY.APPLICANT_EVALUATION,
        QUERY_KEY.APPLICANT_EVALUATION_TABLES,
        posting_id,
        applicant_id,
        evaluation_id,
        table_id,
      ]
      const message =
        result[0].status === '마감취소'
          ? $t('messages.evaluation_close_cancel_success')
          : $t('messages.evaluation_close_success')
      Toast.success(message)
      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
      if (callbackFn) {
        callbackFn()
      }
    },
    onError: () => {
      Toast.error($t('messages.evaluation_close_fail'))
    },
  })
  return {
    closeEvaluationTableMutate,
  }
}

export default useCloseEvaluationTables
