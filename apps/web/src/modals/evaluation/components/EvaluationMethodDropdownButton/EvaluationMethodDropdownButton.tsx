import * as Styles from './styles'
import { EvaluationMethod } from '@/modals/evaluation/evaluation.interface'
import EvaluationMethodItem from '@/modals/evaluation/components/EvaluationMethodItem'
import EssayQuestionTextBox from '@/modals/evaluation/components/EssayQuestionTextBox'
import { useTranslations } from 'next-intl'

interface EvaluationMethodDropdownButtonProps {
  isOpen: boolean
  onClick: () => void
  selectedMethod: EvaluationMethod
}

const EvaluationMethodDropdownButton = ({
  isOpen,
  onClick,
  selectedMethod,
}: EvaluationMethodDropdownButtonProps) => {
  const isSubjectiveAnswer = selectedMethod.label === 'essay'
  const $t = useTranslations('common')

  return (
    <>
      <Styles.Label $isOpen={isOpen}>{$t('options')}</Styles.Label>
      <Styles.ButtonBox $isOpen={isOpen} onClick={onClick}>
        {isSubjectiveAnswer ? (
          <EssayQuestionTextBox />
        ) : (
          <EvaluationMethodItem {...selectedMethod} />
        )}
      </Styles.ButtonBox>
    </>
  )
}

export default EvaluationMethodDropdownButton
