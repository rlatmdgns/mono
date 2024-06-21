import EvaluationTextArea from '@/features/Evaluation/components/EvaluationTextArea'
import { useFormContext } from 'react-hook-form'
import { EvaluationAllMethodLabel } from '@/modals/evaluation/evaluation.interface'
import { useTranslations } from 'next-intl'

interface EvaluationEssayTextareaProps {
  itemSrc: string
  type: EvaluationAllMethodLabel
}

const EvaluationEssayTextarea = ({ itemSrc, type }: EvaluationEssayTextareaProps) => {
  const $t = useTranslations()
  const { register } = useFormContext()
  if (type !== 'essay') return null
  return (
    <EvaluationTextArea
      register={register(`${itemSrc}.item_subjective`, { required: true })}
      placeholder={`${$t('evaluation.feedback_placeholder')} (${$t('common.required')})`}
      maxLength={500}
    />
  )
}

export default EvaluationEssayTextarea
