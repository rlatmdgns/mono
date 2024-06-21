import { EvaluationAllMethodLabel } from '@/modals/evaluation/evaluation.interface'

export interface EvaluationMembersResultResponse {
  evaluation_table_status: string
  table_id: number
  table_title: string
  summary?: SummaryResult
  individual: IndividualResult[]
}

export interface SummaryResult {
  total_summary_score: {
    total: number
    current: number
  }
  evaluation_sections: SummaryEvaluationSection[]
}

export interface IndividualResult {
  user_name: string
  user_profile: string
  user_authority: string
  can_view: boolean
  total_score: number
  score: number
  is_member_evaluation_submitted: boolean
  identification: string
  is_me: boolean
  is_anonymous: boolean
}

export interface SummaryEvaluationSection {
  section_id: number
  section_title: string
  section_description: string
  order: number
  evaluation_items: SummaryEvaluationItem[]
}

export interface SummaryEvaluationItem {
  item_id: number
  item_title: string
  item_type: EvaluationAllMethodLabel
  order: number
  summary_score: SummaryEvaluationItemScore[]
}

export interface SummaryEvaluationItemScore {
  title?: string | number
  evaluation_score: number
  count_score: number
  concat_evaluation_subjective: string
}
