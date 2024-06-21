import { Select } from '@/shared/ui'
import { EvaluationSelectOption } from '@/features/Evaluation/Evaluation.interface'
import { getEvaluationSelectStyles } from '@/features/Evaluation/Evaluation.factory'
import { useTranslations } from 'next-intl'
import { useEvaluationConstants } from '@/features/Evaluation/hooks/useEvaluationConstants'

interface EvaluationResultViewSelectProps {
  resultView: EvaluationSelectOption
  setResultView: (option: EvaluationSelectOption) => void
}

const EvaluationResultViewSelect = ({
  resultView,
  setResultView,
}: EvaluationResultViewSelectProps) => {
  const $t = useTranslations('evaluation')
  const { EVALUATION_RESULT_VIEW_TYPES } = useEvaluationConstants()
  const handleSelectedValueChange = (option: EvaluationSelectOption) => setResultView(option)

  return (
    <Select
      options={EVALUATION_RESULT_VIEW_TYPES}
      value={resultView}
      onChange={handleSelectedValueChange}
      styles={getEvaluationSelectStyles('initial')}
      placeholder={$t('view_type.individual')}
    />
  )
}

export default EvaluationResultViewSelect
