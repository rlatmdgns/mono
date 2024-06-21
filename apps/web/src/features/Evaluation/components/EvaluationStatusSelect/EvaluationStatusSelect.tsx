import { Select } from '@/shared/ui'
import { getEvaluationSelectStyles } from '@/features/Evaluation/Evaluation.factory'
import { useRecoilState } from 'recoil'
import { evaluationTableStatusSelectAtom } from '@/features/Evaluation/recoil/atom'
import { EvaluationSelectOption } from '@/features/Evaluation/Evaluation.interface'
import { useTranslations } from 'next-intl'
import { useEvaluationConstants } from '@/features/Evaluation/hooks/useEvaluationConstants'

const EvaluationStatusSelect = () => {
  const $t = useTranslations('common')
  const { EVALUATION_STATUS_TYPES } = useEvaluationConstants()
  const [selectedOption, setSelectedOption] = useRecoilState(evaluationTableStatusSelectAtom)
  const handleSelectedValueChange = (option: EvaluationSelectOption) => {
    setSelectedOption([option])
  }
  return (
    <Select
      value={selectedOption}
      onChange={handleSelectedValueChange}
      options={EVALUATION_STATUS_TYPES}
      styles={getEvaluationSelectStyles('140px', '156px')}
      placeholder={$t('whole')}
    />
  )
}

export default EvaluationStatusSelect
