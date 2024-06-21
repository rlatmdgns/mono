import EvaluationTextArea from '@/features/Evaluation/components/EvaluationTextArea'
import { useFormContext } from 'react-hook-form'
import { EvaluationAllMethodLabel } from '@/modals/evaluation/evaluation.interface'
import { useTranslations } from 'next-intl'

interface EvaluationCommentTextareaProps {
  isRequiredComment?: boolean
  itemSrc: string
  type: EvaluationAllMethodLabel
}

const EvaluationCommentTextarea = ({
  itemSrc,
  isRequiredComment,
  type,
}: EvaluationCommentTextareaProps) => {
  const $t = useTranslations()
  const { register } = useFormContext()

  if (!type.includes('Comment')) return null
  return (
    <EvaluationTextArea
      register={register(`${itemSrc}.item_subjective`, {
        required: isRequiredComment,
      })}
      placeholder={`${$t('evaluation.feedback_placeholder')} ${isRequiredComment ? `(${$t('common.required')})` : `(${$t('common.optional')})`}`}
      maxLength={100}
      isComment
    />
  )
}

export default EvaluationCommentTextarea
