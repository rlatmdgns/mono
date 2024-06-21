import * as Styles from './styles'
import StepEvaluationItem from '@/features/Evaluation/components/StepEvaluationItem'
import { ApplicantStepEvaluation } from '@/services/evaluation/getApplicantEvaluation/getApplicantEvaluation.interface'
import { EvaluationTableCloseHandler } from '@/features/Evaluation/Evaluation.interface'

interface EvaluationProgressListProps {
  applicantId: string
  applicantEvaluation: ApplicantStepEvaluation[]
  onEvaluationTableClose: EvaluationTableCloseHandler
}

const StepEvaluationList = ({
  applicantId,
  applicantEvaluation,
  onEvaluationTableClose,
}: EvaluationProgressListProps) => {
  return (
    <Styles.Wrapper>
      {applicantEvaluation?.map((evaluation) => (
        <StepEvaluationItem
          key={evaluation.step_id}
          applicantId={applicantId}
          stepName={evaluation.step_name}
          evaluationId={`${evaluation.evaluation_v2_id}`}
          evaluationStatus={evaluation.evaluation_status}
          tableTotalScore={evaluation.table_total_score}
          tableScore={evaluation.table_score}
          userAuthority={evaluation.user_authority}
          access={evaluation.access}
          onEvaluationTableClose={onEvaluationTableClose}
        />
      ))}
    </Styles.Wrapper>
  )
}

export default StepEvaluationList
