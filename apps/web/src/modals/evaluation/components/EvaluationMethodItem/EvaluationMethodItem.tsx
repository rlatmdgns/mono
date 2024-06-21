import * as Styles from './styles'
import { EvaluationMethodLabel } from '@/modals/evaluation/evaluation.interface'

interface EvaluationOptionProps {
  values: string[] | number[]
  label: EvaluationMethodLabel
  isSelected?: boolean
  isFocused?: boolean
  onClick?: (label: EvaluationMethodLabel) => void
}

const EvaluationMethodItem = ({
  values,
  label,
  isSelected,
  isFocused,
  onClick,
}: EvaluationOptionProps) => {
  const handleClick = () => {
    if (!onClick) return
    onClick(label)
  }

  return (
    <Styles.Wrapper onClick={handleClick} $isFocused={isFocused} $isSelected={isSelected}>
      {values?.map((value) => <Styles.Item key={value}>{value}</Styles.Item>)}
    </Styles.Wrapper>
  )
}

export default EvaluationMethodItem
