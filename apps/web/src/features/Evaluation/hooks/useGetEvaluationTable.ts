import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import getEvaluationTable from '@/services/evaluation/getEvaluationTable'
import { EvaluationTableForm } from '@/features/Evaluation/Evaluation.interface'

const useGetEvaluationTable = (
  evaluation_id: string,
  table_id: string,
  initialData?: EvaluationTableForm,
) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.EVALUATION_TABLE, evaluation_id, table_id],
    queryFn: () => getEvaluationTable(evaluation_id, table_id),
    enabled: !!evaluation_id && !!table_id,
    initialData,
  })
  return {
    data,
  }
}

export default useGetEvaluationTable
