import * as Styles from './styles'
import EvaluationTableMemberHeader from '@/modals/evaluation/EvaluationSettingModal/components/EvaluationTableMemberHeader/EvaluationTableMemberHeader'
import EvaluationTableMemberList from '@/modals/evaluation/EvaluationSettingModal/components/EvaluationTableMemberList/EvaluationTableMemberList'
import { PostingMember } from '@/interface/posting'
import { EvaluationMember } from '@/interface/evaluation'

interface EvaluationTableMemberProps {
  postingMembers: PostingMember[]
  evaluationMembers: EvaluationMember[]
}

const EvaluationTableMember = ({
  postingMembers,
  evaluationMembers,
}: EvaluationTableMemberProps) => {
  return (
    <Styles.Wrapper>
      <EvaluationTableMemberHeader
        postingMembers={postingMembers}
        evaluationMembers={evaluationMembers}
      />
      <EvaluationTableMemberList />
    </Styles.Wrapper>
  )
}

export default EvaluationTableMember
