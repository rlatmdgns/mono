import * as Styles from './styles'
import { SummaryEvaluationItem } from '@/services/evaluation/getEvaluationMembersResult/getEvaluationMembersResult.interface'
import EvaluationSummaryArticleItem from '@/features/Evaluation/components/EvaluationSummaryArticleItem'

interface EvaluationSummaryArticleItemProps {
  evaluationItems: SummaryEvaluationItem[]
}

const EvaluationSummaryArticleList = ({ evaluationItems }: EvaluationSummaryArticleItemProps) => {
  return (
    <Styles.Wrapper>
      {evaluationItems.map((item) => (
        <EvaluationSummaryArticleItem
          key={item.item_id}
          itemTitle={item.item_title}
          itemType={item.item_type}
          summaryScore={item.summary_score || 0}
        />
      ))}
    </Styles.Wrapper>
  )
}

export default EvaluationSummaryArticleList
