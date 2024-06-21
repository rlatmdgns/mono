import { SummaryEvaluationItemScore } from '@/services/evaluation/getEvaluationMembersResult/getEvaluationMembersResult.interface'
import { EvaluationAllMethodLabel } from '@/modals/evaluation/evaluation.interface'
import { EVALUATION_METHODS } from '@/modals/evaluation/evaluation.constants'
import { EVALUATION_METHOD_SCORES } from '@/features/Evaluation/Evaluation.constants'
import { filterMethodWithOutComment } from '@/modals/evaluation/evaluation.factory'
import { getReduceArray } from '@/features/Evaluation/Evaluation.factory'
import { getNumberToFixed } from '@/shared/lib/utils'

export const convertEvaluationSummaryItemStatus = (
  itemType: EvaluationAllMethodLabel,
  summaryScore: SummaryEvaluationItemScore[],
) => {
  const scoreMethods = EVALUATION_METHODS[filterMethodWithOutComment(itemType)]
  const allMethodScores = EVALUATION_METHOD_SCORES[filterMethodWithOutComment(itemType)]
  const allCountSum = summaryScore.map((score) => score.count_score)
  const countScoreSum = getReduceArray(allCountSum)

  const evaluationItemScores = allMethodScores.map((score, index) => {
    const title = scoreMethods[index]
    return {
      title,
      evaluation_score: score,
      count_score: 0,
      concat_evaluation_subjective: '',
    }
  })

  summaryScore.forEach((score) => {
    const scoreIndex = evaluationItemScores.findIndex(
      (item) => item.evaluation_score === score.evaluation_score,
    )
    if (scoreIndex === -1) return
    evaluationItemScores[scoreIndex].count_score = score.count_score
    evaluationItemScores[scoreIndex].concat_evaluation_subjective =
      score.concat_evaluation_subjective
  })

  return evaluationItemScores.map((score) => getEvaluationSummaryScore(score, countScoreSum))
}

export const getEvaluationSummaryScore = (
  score: SummaryEvaluationItemScore,
  countScoreSum: number,
) => {
  const percent = getEvaluationSummaryScorePercent(score.count_score, countScoreSum)
  return {
    ...score,
    percent,
  }
}

export const getEvaluationSummaryScorePercent = (countScore: number, countScoreSum: number) => {
  return getNumberToFixed((countScore / countScoreSum) * 100)
}
