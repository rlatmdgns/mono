import * as Styles from './styles'
import EvaluationSection from '@/features/Evaluation/components/EvaluationSection'
import EvaluationArticleList from '@/features/Evaluation/components/EvaluationArticleList'
import { EvaluationTableArticle } from '@/features/Evaluation/Evaluation.interface'

interface EvaluationItemProps {
  sectionTitle: string
  sectionDescription?: string
  evaluationItems: EvaluationTableArticle[]
  sectionIndex: number
}

const EvaluationItem = ({
  sectionTitle,
  sectionDescription,
  evaluationItems,
  sectionIndex,
}: EvaluationItemProps) => {
  return (
    <Styles.Wrapper>
      <EvaluationSection title={sectionTitle} desc={sectionDescription} />
      <EvaluationArticleList evaluationItems={evaluationItems} sectionIndex={sectionIndex} />
    </Styles.Wrapper>
  )
}

export default EvaluationItem
