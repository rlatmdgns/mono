import * as Styles from './styles'

import EvaluationTableMember from '@/modals/evaluation/EvaluationSettingModal/components/EvaluationTableMember'
import EvaluationTableCard from '@/modals/evaluation/EvaluationSettingModal/components/EvaluationTableCard'
import { PostingMember } from '@/interface/posting'
import { EvaluationMember, EvaluationTable } from '@/interface/evaluation'

interface EvaluationTableContentProps {
  table?: EvaluationTable
  evaluationId: number
  postingMembers: PostingMember[]
  evaluationMembers: EvaluationMember[]
}

const EvaluationTableContent = ({
  table,
  evaluationId,
  postingMembers,
  evaluationMembers,
}: EvaluationTableContentProps) => {
  if (!table) return null
  return (
    <Styles.Wrapper>
      <EvaluationTableCard
        tableTitle={table.table_title}
        tableId={table.table_id}
        evaluationId={evaluationId}
      />
      <EvaluationTableMember
        postingMembers={postingMembers}
        evaluationMembers={evaluationMembers}
      />
    </Styles.Wrapper>
  )
}

export default EvaluationTableContent
