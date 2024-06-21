import { ApplicantStepEvaluation } from '@/services/evaluation/getApplicantEvaluation/getApplicantEvaluation.interface'
import { getNumberToFixed } from '@/shared/lib/utils'

export const getStepEvaluationTotalStatus = (applicantEvaluation: ApplicantStepEvaluation[]) => {
  if (!applicantEvaluation)
    return {
      totalScoreSum: 0,
      percentageSum: 0,
    }
  const completedEvaluation = applicantEvaluation?.filter((item) => !!item.table_total_score) || []
  const totalScore = applicantEvaluation?.map((item) => Number(item.table_score))
  const totalScoreSum = getNumberToFixed(totalScore?.reduce((total, amount) => total + amount) || 0)
  const percentage = completedEvaluation.map((item) =>
    getNumberToFixed((Number(item.table_score) / Number(item.table_total_score) || 0) * 100),
  )
  const percentageSum =
    percentage.length > 0
      ? getNumberToFixed(
          percentage.reduce((total, amount) => total + amount) /
            (completedEvaluation.length || applicantEvaluation.length),
        )
      : 0

  return {
    totalScoreSum,
    percentageSum,
  }
}
