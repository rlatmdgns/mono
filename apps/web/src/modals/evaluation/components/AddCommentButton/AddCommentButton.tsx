import { Button } from '@/shared/ui'
import {
  EvaluationAllMethodLabel,
  EvaluationMethodLabel,
} from '@/modals/evaluation/evaluation.interface'
import { useTranslations } from 'next-intl'

interface AddCommentButtonProps {
  method: EvaluationMethodLabel
  isFocused?: boolean
  isComment?: boolean
  onClick?: (label: EvaluationAllMethodLabel) => void
}

const AddCommentButton = ({ method, isFocused, isComment, onClick }: AddCommentButtonProps) => {
  const $t = useTranslations('evaluation')
  const handleMethod = () => {
    if (!onClick) return
    const methodWithComment = `${method}Comment` as EvaluationAllMethodLabel
    onClick(methodWithComment)
  }

  if (!isFocused || isComment) return null
  return <Button onClick={handleMethod} style="fill-weak" text={$t('add_comment')} />
}

export default AddCommentButton
