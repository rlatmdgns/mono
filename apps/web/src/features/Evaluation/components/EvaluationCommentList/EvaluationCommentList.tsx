import * as Styles from './styles'
import EvaluationCommentItem from '../EvaluationCommentItem'

interface EvaluationCommentListProps {
  concatEvaluationSubjective?: string
}

const EvaluationCommentList = ({ concatEvaluationSubjective }: EvaluationCommentListProps) => {
  if (!concatEvaluationSubjective) return null
  const evaluationSubjectives = concatEvaluationSubjective?.split(' stead_sep ')

  return (
    <Styles.Wrapper>
      {evaluationSubjectives?.map((comment, index) => (
        <EvaluationCommentItem key={index} comment={comment} />
      ))}
    </Styles.Wrapper>
  )
}

export default EvaluationCommentList
