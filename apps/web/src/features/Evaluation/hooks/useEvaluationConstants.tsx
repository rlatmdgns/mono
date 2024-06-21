import { useTranslations } from 'next-intl'
import { EvaluationSelectOption } from '@/features/Evaluation/Evaluation.interface'

export const useEvaluationConstants = () => {
  const $t = useTranslations()

  const EVALUATION_RESULT_VIEW_TYPES: EvaluationSelectOption[] = [
    { value: 'summary', label: $t('evaluation.view_type.summary') },
    { value: 'individual', label: $t('evaluation.view_type.individual') },
  ]

  const EVALUATION_STATUS_TYPES: EvaluationSelectOption[] = [
    { value: 'all', label: $t('evaluation.status.all') },
    { value: 'proceeding', label: $t('evaluation.status.proceeding') },
    { value: 'closed', label: $t('evaluation.status.closed') },
  ]

  const EVALUATION_CLOSE = $t('evaluation.type.close')
  const EVALUATION_IN_PROGRESS = $t('evaluation.type.progress')
  const NO_EVALUATION = $t('evaluation.type.none')
  const NO_ACCESS_EVALUATION = $t('evaluation.type.no_access')

  const getStatusText = (status: string) => {
    switch (status) {
      case 'closed':
        return EVALUATION_CLOSE
      case 'proceeding':
        return EVALUATION_IN_PROGRESS
      default:
        return NO_EVALUATION
    }
  }

  return {
    EVALUATION_RESULT_VIEW_TYPES,
    EVALUATION_STATUS_TYPES,
    EVALUATION_CLOSE,
    EVALUATION_IN_PROGRESS,
    NO_EVALUATION,
    NO_ACCESS_EVALUATION,
    getStatusText,
  }
}
