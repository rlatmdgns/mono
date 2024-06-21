import * as Styles from './styles'
import EvaluationTableItem from '../EvaluationTableItem'
import { EvaluationTableCloseHandler } from '@/features/Evaluation/Evaluation.interface'
import { ApplicantEvaluationTable } from '@/services/evaluation/getApplicantEvaluationTables/getApplicantEvaluationTables.interface'

interface EvaluationTableProgressListProps {
  evaluationId: string
  userAuthority: string
  onEvaluationTableClose: EvaluationTableCloseHandler
  isOpen: boolean
  tables?: ApplicantEvaluationTable[]
}

const EvaluationTableList = ({
  evaluationId,
  userAuthority,
  onEvaluationTableClose,
  isOpen,
  tables,
}: EvaluationTableProgressListProps) => {
  const isEmpty = !!(tables && tables?.length < 1)

  if (!isOpen || !tables) return null
  return (
    <Styles.Wrapper $isEmpty={isEmpty}>
      {tables?.map((table) => (
        <EvaluationTableItem
          key={table.table_id}
          evaluationId={evaluationId}
          tableId={`${table.table_id}`}
          isAccess={table.is_access}
          userAuthority={userAuthority}
          tableTitle={table.table_title}
          evaluationTableStatus={table.evaluation_table_status}
          members={table.members}
          membersCount={table.members_count}
          submittedCount={table.submitted_count}
          isMyEvaluationSubmitted={table.is_my_evaluation_submitted}
          onEvaluationTableClose={onEvaluationTableClose}
        />
      ))}
    </Styles.Wrapper>
  )
}

export default EvaluationTableList
