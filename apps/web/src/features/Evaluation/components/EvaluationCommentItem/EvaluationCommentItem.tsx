import * as Styles from './styles'

interface EvaluationCommentItemProps {
  comment?: string
}

const EvaluationCommentItem = ({ comment }: EvaluationCommentItemProps) => {
  if (!comment) return null
  return <Styles.Item>{comment}</Styles.Item>
}

export default EvaluationCommentItem
