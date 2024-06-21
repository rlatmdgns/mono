import * as Styles from './styles'
import EvaluationTitleAndScore from '@/features/Evaluation/components/EvaluationTitleAndScore'
import EvaluationCommentItem from '@/features/Evaluation/components/EvaluationCommentItem'
import EvaluationResultItemTab from '@/features/Evaluation/components/EvaluationResultItemTab'
import { EvaluationAllMethodLabel } from '@/modals/evaluation/evaluation.interface'

interface EvaluationResultItemProps {
  itemTitle: string
  itemType: EvaluationAllMethodLabel
  evaluationScore: number
  evaluationSubjective?: string
  evaluationOptionalValue?: string
}

const EvaluationResultItem = ({
  itemTitle,
  evaluationScore,
  evaluationSubjective,
  evaluationOptionalValue,
  itemType,
}: EvaluationResultItemProps) => {
  return (
    <Styles.Wrapper>
      <EvaluationTitleAndScore
        title={itemTitle}
        score={evaluationScore}
        isEssay={itemType === 'essay'}
      />
      <EvaluationResultItemTab itemType={itemType} evaluationScore={evaluationScore} />
      <EvaluationCommentItem comment={evaluationSubjective || evaluationOptionalValue} />
    </Styles.Wrapper>
  )
}

export default EvaluationResultItem
