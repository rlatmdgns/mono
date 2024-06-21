import { IconBoxButton } from '@/shared/ui'
import { EvaluationViewState } from '@/features/Evaluation/Evaluation.interface'

interface EvaluationTableProgressArrowIconProps {
  evaluationTableStatus: string
  onStateChange: (state?: EvaluationViewState) => void
  isAccess: boolean
  isMyEvaluationSubmitted: boolean
}

const EvaluationTableResultButton = ({
  evaluationTableStatus,
  onStateChange,
  isAccess,
  isMyEvaluationSubmitted,
}: EvaluationTableProgressArrowIconProps) => {
  const getNextState = () => {
    if (!isAccess && !isMyEvaluationSubmitted) return undefined
    if (isAccess) return 'member_result_list'
    return 'my_result'
  }
  const handleIconClick = () => onStateChange(getNextState())

  if (evaluationTableStatus !== 'closed' || !getNextState()) return null
  return <IconBoxButton onClick={handleIconClick} icon="icon/right-line" style="mono" size="xs" />
}

export default EvaluationTableResultButton
