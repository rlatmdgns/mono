export interface SubmitEvaluationRequest {
  evaluation_id: string
  table_id: string
  applicant_id: string
  data: {
    evaluation_data: {
      evaluation_sections: SubmitEvaluationSection[]
    }
  }
}

export interface SubmitEvaluationSection {
  section_id: number
  evaluation_items: SubmitEvaluationSectionItem[]
}

export interface SubmitEvaluationSectionItem {
  item_id: number
  item_type: string
  item_score?: number
  item_subjective?: number
  comment?: string
}
