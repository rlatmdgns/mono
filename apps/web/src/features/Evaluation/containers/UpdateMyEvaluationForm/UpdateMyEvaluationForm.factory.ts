import {
  EvaluationResultItem,
  EvaluationResultSection,
} from '@/services/evaluation/getEvaluationMemberResult/getEvaluationMemberResult.interface'

export const convertToEvaluationUpdateFormValues = (
  evaluation_sections?: EvaluationResultSection[],
) => {
  if (!evaluation_sections) return []
  return evaluation_sections.map((section) => {
    return {
      section_id: section.section_id,
      evaluation_items: convertToEvaluationItemFormValues(section.evaluation_items),
    }
  })
}

export const convertToEvaluationItemFormValues = (evaluation_items: EvaluationResultItem[]) => {
  return evaluation_items.map((item) => {
    return {
      item_id: item.item_id,
      item_type: item.item_type,
      item_score: item.evaluation_score,
      item_subjective: item.evaluation_subjective,
    }
  })
}
