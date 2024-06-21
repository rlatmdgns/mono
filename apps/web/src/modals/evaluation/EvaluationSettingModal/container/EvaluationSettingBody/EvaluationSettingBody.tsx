import * as Styles from './styles'
import EvaluationTableContainer from '@/modals/evaluation/EvaluationSettingModal/components/EvaluationTableContainer'
import EmptyEvaluationTable from '@/modals/evaluation/EvaluationSettingModal/components/EmptyEvaluationTable'
import { PostingMember } from '@/interface/posting'
import { EvaluationMember, EvaluationTable } from '@/interface/evaluation'

interface EvaluationSettingBodyProps {
  evaluationTables: EvaluationTable[]
  evaluationId: number
  postingMembers: PostingMember[]
  evaluationMembers: EvaluationMember[]
}

const EvaluationSettingBody = ({
  evaluationTables,
  evaluationId,
  postingMembers,
  evaluationMembers,
}: EvaluationSettingBodyProps) => {
  return (
    <Styles.Wrapper>
      <EmptyEvaluationTable evaluationTables={evaluationTables} evaluationId={evaluationId} />
      <EvaluationTableContainer
        evaluationId={evaluationId}
        evaluationTables={evaluationTables}
        postingMembers={postingMembers}
        evaluationMembers={evaluationMembers}
      />
    </Styles.Wrapper>
  )
}

export default EvaluationSettingBody
