import * as Styles from './styles'
import {
  EvaluationTableCloseHandler,
  EvaluationViewState,
} from '@/features/Evaluation/Evaluation.interface'
import { useEvaluationTableButtonBoxFunctions } from '@/features/Evaluation/components/EvaluationTableButtonBox/hooks/useEvaluationTableButtonBoxFunctions'

interface EvaluationTableProgressButtonProps {
  evaluationId: string
  tableId: string
  isMyEvaluationSubmitted: boolean
  evaluationTableStatus: string
  userAuthority: string
  onStateChange: (state: EvaluationViewState) => void
  onEvaluationTableClose: EvaluationTableCloseHandler
}

const EvaluationTableButtonBox = ({
  evaluationId,
  tableId,
  isMyEvaluationSubmitted,
  evaluationTableStatus,
  userAuthority,
  onStateChange,
  onEvaluationTableClose,
}: EvaluationTableProgressButtonProps) => {
  const isClosed = evaluationTableStatus === 'closed'

  const handleEvaluationTableCloseToggle = () => {
    onEvaluationTableClose(isClosed, evaluationId, tableId)
  }

  const { getButton } = useEvaluationTableButtonBoxFunctions()

  const button = getButton(
    onStateChange,
    handleEvaluationTableCloseToggle,
    userAuthority,
    isMyEvaluationSubmitted,
    evaluationTableStatus,
  )

  if (!button) return null
  return <Styles.Wrapper>{button}</Styles.Wrapper>
}

export default EvaluationTableButtonBox
