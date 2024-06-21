import * as Styles from './styles'
import EvaluationFooter from '@/features/Evaluation/components/EvaluationFooter'
import ScoreBadge from '@/features/Evaluation/components/ScoreBadge'
import { Button, Toast } from '@/shared/ui'
import { useFormContext } from 'react-hook-form'
import {
  convertToPercent,
  isValidForm,
} from '@/features/Evaluation/containers/EvaluationSubmitForm/EvaluationSubmitForm.functions'
import { useTranslations } from 'next-intl'

const EvaluationSubmitFormFooter = () => {
  const $t = useTranslations()
  const {
    watch,
    formState: { isValid },
  } = useFormContext()
  const { score, totalScore, percentage } = convertToPercent(
    watch('evaluation_data.evaluation_sections'),
  )
  const isFormValid = isValidForm(watch('evaluation_data.evaluation_sections')) && isValid

  const handleErrorToast = () => {
    if (isFormValid) return
    Toast.error($t('messages.require_input_submit'))
  }

  return (
    <EvaluationFooter>
      <Styles.Content>
        <Styles.Title>{$t('evaluation.total_score_title')}</Styles.Title>
        <ScoreBadge
          score={$t('evaluation.total_score', { score, totalScore })}
          percentage={`${percentage}`}
        />
      </Styles.Content>
      <Styles.ButtonBox onClick={handleErrorToast} $disabled={!isFormValid}>
        <Button type="submit" text={$t('evaluation.evaluation_submit')} size="md" />
      </Styles.ButtonBox>
    </EvaluationFooter>
  )
}

export default EvaluationSubmitFormFooter
