import { EvaluationAllMethodLabel } from '@/modals/evaluation/evaluation.interface'

export interface EvaluationMemberResultResponse {
  table_id: number
  table_title: string
  total_score: number
  current_score: number
  evaluation_table_status: string
  is_me: boolean
  user_name: string
  user_profile: string
  evaluation_sections: EvaluationResultSection[]
}

export interface EvaluationResultSection {
  section_id: number
  section_title: string
  section_description: string
  order: number
  evaluation_items: EvaluationResultItem[]
}

export interface EvaluationResultItem {
  item_id: number
  item_title: string
  item_type: EvaluationAllMethodLabel
  order: number
  evaluation_subjective: string
  evaluation_score: number
  evaluation_optional_value: string
}
