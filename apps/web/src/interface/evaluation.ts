import { EvaluationAllMethodLabel } from '@/modals/evaluation/evaluation.interface'

export interface EvaluationResponse {
  evaluation_v2_id: number
  evaluation_members: EvaluationMember[]
  tables: EvaluationTable[]
  is_anonymous: boolean
}

export interface EvaluationTemplateRequest {
  template_title: string
  template_contents: EvaluationTableForm
}

export interface UpdateEvaluationTemplateRequest {
  id: string
  data: EvaluationTemplateRequest
}
export interface EvaluationTable {
  table_id: number
  table_title: string
  can_delete: EvaluationTableState
  can_edit: EvaluationTableState
}

export interface EvaluationMember {
  identification: string
  user_name: string
  user_authority: string
  user_profile: string
  can_view?: boolean
}

export interface EvaluationTableState {
  status: boolean
  reason: string
}

export interface EvaluationTableForm {
  table_title: string
  evaluation_sections: EvaluationTableSection[]
}

export interface EvaluationTableSection {
  section_title: string
  section_description?: string
  evaluation_items: EvaluationTableItem[]
}

export interface EvaluationTableItem {
  item_title: string
  item_type: EvaluationAllMethodLabel
  is_required_comment?: boolean
}

export type EvaluationStatus = 'proceeding' | 'closed' | 'none'
