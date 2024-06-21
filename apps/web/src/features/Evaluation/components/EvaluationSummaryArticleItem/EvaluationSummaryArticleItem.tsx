import * as Styles from './styles'
import EvaluationTitleAndScore from '@/features/Evaluation/components/EvaluationTitleAndScore'
import EvaluationTabList from '@/features/Evaluation/components/EvaluationTabList'
import EvaluationCommentList from '@/features/Evaluation/components/EvaluationCommentList'
import { getEvaluationSummaryItemStatus } from '@/features/Evaluation/components/EvaluationSummaryArticleItem/EvaluationSummaryArticleItem.factory'
import { SummaryEvaluationItemScore } from '@/services/evaluation/getEvaluationMembersResult/getEvaluationMembersResult.interface'
import { EvaluationAllMethodLabel } from '@/modals/evaluation/evaluation.interface'
import { getNumberToFixed } from '@/shared/lib/utils'

interface EvaluationSummaryArticleItemProps {
  itemTitle: string
  itemType: EvaluationAllMethodLabel
  summaryScore: SummaryEvaluationItemScore[]
}

const EvaluationSummaryArticleItem = ({
  itemTitle,
  itemType,
  summaryScore,
}: EvaluationSummaryArticleItemProps) => {
  const isEssay = itemType === 'essay'
  const { comments, scoreAvg } = getEvaluationSummaryItemStatus(summaryScore)

  return (
    <Styles.Wrapper>
      <EvaluationTitleAndScore
        title={itemTitle}
        score={getNumberToFixed(scoreAvg) || 0}
        isEssay={isEssay}
      />
      <Styles.Content>
        {!isEssay && (
          <>
            <EvaluationTabList itemType={itemType} summaryScore={summaryScore} />
            {comments.map((comment, index) => (
              <EvaluationCommentList key={index} concatEvaluationSubjective={comment} />
            ))}
          </>
        )}
        {isEssay && (
          <EvaluationCommentList
            concatEvaluationSubjective={summaryScore[0]?.concat_evaluation_subjective}
          />
        )}
      </Styles.Content>
    </Styles.Wrapper>
  )
}

export default EvaluationSummaryArticleItem
