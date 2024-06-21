import { IndividualResult } from '@/services/evaluation/getEvaluationMembersResult/getEvaluationMembersResult.interface'
import { getReduceArray } from '@/features/Evaluation/Evaluation.factory'
import { getNumberToFixed } from '@/shared/lib/utils'

export const getEvaluationProgressStatus = (individual?: IndividualResult[]) => {
  if (!individual)
    return {
      score: 0,
      totalScore: 0,
      percentage: 0,
      summitedLength: 0,
      memberLength: 0,
    }

  const summitedScore = individual.filter((item) => item.is_member_evaluation_submitted)

  const summitedLength = summitedScore.length
  const memberLength = individual.length
  const totalScore = individual[0].total_score * (summitedLength || 1)

  const score = getReduceArray(summitedScore.map((item) => Number(item.score))) || 0
  const percentage = getNumberToFixed((score / totalScore) * 100)

  return {
    score,
    totalScore,
    percentage,
    summitedLength,
    memberLength,
  }
}
