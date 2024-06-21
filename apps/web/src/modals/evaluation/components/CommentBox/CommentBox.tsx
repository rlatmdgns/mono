import {
  EvaluationAllMethodLabel,
  EvaluationMethodLabel,
} from '@/modals/evaluation/evaluation.interface'
import AddCommentButton from '@/modals/evaluation/components/AddCommentButton'
import CommentSetting from '@/modals/evaluation/components/CommentSetting'

interface CommentBoxProps {
  isComment?: boolean
  isRequiredComment?: boolean
  isFocused?: boolean
  method: EvaluationMethodLabel
  onClick?: (label: EvaluationAllMethodLabel) => void
  onToggle: () => void
}

const CommentBox = ({
  isComment,
  isRequiredComment,
  isFocused,
  method,
  onClick,
  onToggle,
}: CommentBoxProps) => {
  if (method === 'essay') return null
  return (
    <>
      <AddCommentButton
        method={method}
        onClick={onClick}
        isComment={isComment}
        isFocused={isFocused}
      />
      <CommentSetting
        method={method}
        onClick={onClick}
        isComment={isComment}
        isRequiredComment={isRequiredComment}
        onToggle={onToggle}
      />
    </>
  )
}

export default CommentBox
