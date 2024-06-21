import * as Styles from './styles'
import EvaluationSection from '@/features/Evaluation/components/EvaluationSection'
import EvaluationResultList from '@/features/Evaluation/components/EvaluationResultList'
import { EvaluationResultItem } from '@/services/evaluation/getEvaluationMemberResult/getEvaluationMemberResult.interface'

interface EvaluationClosingContentsProps {
  sectionTitle: string
  sectionDescription?: string
  evaluationItems: EvaluationResultItem[]
}

const EvaluationResultSectionItem = ({
  sectionTitle,
  sectionDescription,
  evaluationItems,
}: EvaluationClosingContentsProps) => {
  return (
    <Styles.Wrapper>
      <EvaluationSection title={sectionTitle} desc={sectionDescription} />
      <Styles.ResultContainer>
        <EvaluationResultList evaluationItems={evaluationItems} />
      </Styles.ResultContainer>
    </Styles.Wrapper>
  )
}

export default EvaluationResultSectionItem
