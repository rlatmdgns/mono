import { SummaryEvaluationItemScore } from '@/services/evaluation/getEvaluationMembersResult/getEvaluationMembersResult.interface'
import { getReduceArray } from '@/features/Evaluation/Evaluation.factory'

export const getEvaluationSummaryItemStatus = (summaryScore: SummaryEvaluationItemScore[]) => {
  const comments = summaryScore.map((score) => score.concat_evaluation_subjective)
  const submitCount = getReduceArray(summaryScore.map((score) => score.count_score))
  const scoreSum = getReduceArray(
    summaryScore.map((score) => score.evaluation_score * score.count_score),
  )
  const scoreAvg = scoreSum / submitCount

  return {
    comments,
    scoreAvg,
  }
}
