import { ApplicantEvaluationTable } from '@/services/evaluation/getApplicantEvaluationTables/getApplicantEvaluationTables.interface'
import { EvaluationTableList } from '@/features/Evaluation/Evaluation.interface'

export const getFilterEvaluationTableStatus = (
  statusSelect: string,
  tables?: ApplicantEvaluationTable[],
) => {
  if (!tables) return []

  const filterList: EvaluationTableList = {
    all: tables,
    proceeding: tables.filter((table) => table.evaluation_table_status !== 'closed'),
    closed: tables.filter((table) => table.evaluation_table_status === 'closed'),
  }
  return filterList[statusSelect]
}
