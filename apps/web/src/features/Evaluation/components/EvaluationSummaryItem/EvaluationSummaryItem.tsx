import * as Styles from './styles'
import EvaluationSection from '@/features/Evaluation/components/EvaluationSection'
import EvaluationSummaryArticleList from '@/features/Evaluation/components/EvaluationSummaryArticleList'
import { SummaryEvaluationItem } from '@/services/evaluation/getEvaluationMembersResult/getEvaluationMembersResult.interface'

interface EvaluationSummaryItemProps {
  sectionTitle: string
  sectionDescription?: string
  evaluationItems: SummaryEvaluationItem[]
}

const EvaluationSummaryItem = ({
  sectionTitle,
  sectionDescription,
  evaluationItems,
}: EvaluationSummaryItemProps) => {
  return (
    <Styles.Wrapper>
      <EvaluationSection title={sectionTitle} desc={sectionDescription} />
      <EvaluationSummaryArticleList evaluationItems={evaluationItems} />
    </Styles.Wrapper>
  )
}

export default EvaluationSummaryItem
