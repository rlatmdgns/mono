import * as Styles from './styles'
import { EvaluationAllMethodLabel } from '@/modals/evaluation/evaluation.interface'
import { getEvaluationResultItemStatus } from '@/features/Evaluation/components/EvaluationResultItemTab/EvaluationResultItemTab.factory'

interface EvaluationResultItemTabProps {
  itemType: EvaluationAllMethodLabel
  evaluationScore: number
}

const EvaluationResultItemTab = ({ itemType, evaluationScore }: EvaluationResultItemTabProps) => {
  const { itemMethods, isSelected } = getEvaluationResultItemStatus(itemType, evaluationScore)

  if (itemType === 'essay') return null
  return (
    <Styles.Wrapper>
      {itemMethods.map((method, index) => (
        <Styles.Item key={index} $isSelected={isSelected(method)}>
          {method}
        </Styles.Item>
      ))}
    </Styles.Wrapper>
  )
}

export default EvaluationResultItemTab
