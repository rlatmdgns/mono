import * as Styles from './styles'
import { getEvaluationTableStatusIcon } from '@/features/Evaluation/components/EvaluationTableStatusIcon/EvaluationTableStatusIcon.factory'

interface EvaluationTableProgressIconProps {
  evaluationTableStatus: string
}

const EvaluationTableStatusIcon = ({ evaluationTableStatus }: EvaluationTableProgressIconProps) => {
  const { icon, bgColor } = getEvaluationTableStatusIcon(evaluationTableStatus)

  return (
    <Styles.Wrapper $bgColor={bgColor} $status={evaluationTableStatus}>
      {icon}
    </Styles.Wrapper>
  )
}

export default EvaluationTableStatusIcon
