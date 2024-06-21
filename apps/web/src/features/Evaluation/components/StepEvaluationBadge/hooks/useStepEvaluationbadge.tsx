import { getStatusIcon, getStatusIconColor } from '@/features/Evaluation/Evaluation.factory'
import { useEvaluationConstants } from '@/features/Evaluation/hooks/useEvaluationConstants'
import { colorType, IconNames } from "@repo/ui/src/components/Icon";

interface StepEvaluationStatus {
  icon: IconNames
  iconColor: colorType
  status: string
}

export const useStepEvaluationBadge = () => {
  const {NO_ACCESS_EVALUATION, getStatusText} = useEvaluationConstants()

  const getStepEvaluationStatus = (access: boolean, evaluationStatus: string) => {
    if (!access) {
      return {
        icon: 'icon/ban-line',
        iconColor: 'neutralGray400',
        status: NO_ACCESS_EVALUATION,
      } as StepEvaluationStatus
    }
    return {
      icon: getStatusIcon(evaluationStatus),
      iconColor: getStatusIconColor(evaluationStatus),
      status: getStatusText(evaluationStatus),
    } as StepEvaluationStatus
  }

  return {getStepEvaluationStatus}
}
