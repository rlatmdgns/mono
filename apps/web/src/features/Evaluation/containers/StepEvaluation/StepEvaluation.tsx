import * as Styles from './styles'
import StepEvaluationHeader from '@/features/Evaluation/components/StepEvaluationHeader'
import StepEvaluationList from '@/features/Evaluation/components/StepEvaluationList'
import { evaluationViewStateAtom } from '@/features/Evaluation/recoil/atom'
import { useRecoilValue } from 'recoil'
import { ApplicantStepEvaluation } from '@/services/evaluation/getApplicantEvaluation/getApplicantEvaluation.interface'
import { EvaluationTableCloseHandler } from '@/features/Evaluation/Evaluation.interface'

interface EvaluationListProps {
  applicantId: string
  applicantEvaluation: ApplicantStepEvaluation[]
  onEvaluationTableClose: EvaluationTableCloseHandler
}

const StepEvaluation = ({
  applicantId,
  applicantEvaluation,
  onEvaluationTableClose,
}: EvaluationListProps) => {
  const evaluationViewState = useRecoilValue(evaluationViewStateAtom)

  if (evaluationViewState !== 'main') return null
  return (
    <Styles.Wrapper>
      <StepEvaluationHeader applicantEvaluation={applicantEvaluation} />
      <StepEvaluationList
        applicantId={applicantId}
        applicantEvaluation={applicantEvaluation}
        onEvaluationTableClose={onEvaluationTableClose}
      />
    </Styles.Wrapper>
  )
}

export default StepEvaluation
