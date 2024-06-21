import { filterMethodWithOutComment } from '@/modals/evaluation/evaluation.factory'
import { EvaluationAllMethodLabel } from '@/modals/evaluation/evaluation.interface'
import { EVALUATION_METHODS } from '@/modals/evaluation/evaluation.constants'
import { EVALUATION_METHOD_SCORES } from '@/features/Evaluation/Evaluation.constants'

export const getEvaluationResultItemStatus = (
  itemType: EvaluationAllMethodLabel,
  evaluationScore: number,
) => {
  const itemMethods = EVALUATION_METHODS[filterMethodWithOutComment(itemType)]
  const ItemScores = EVALUATION_METHOD_SCORES[filterMethodWithOutComment(itemType)]

  const isSelected = (method: number | string) => {
    const methodIndex = itemMethods.findIndex((item) => item === method)
    const scoreIndex = ItemScores.findIndex((item) => item === evaluationScore)
    return methodIndex === scoreIndex
  }

  return {
    itemMethods,
    isSelected,
  }
}
