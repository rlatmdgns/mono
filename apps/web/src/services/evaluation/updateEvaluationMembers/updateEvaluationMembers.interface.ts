export interface UpdateEvaluationMembersRequest {
  evaluation_id: string
  data: UpdateEvaluationMembersForm
}

export interface UpdateEvaluationMembersForm {
  evaluation_members: EvaluationMember[]
  is_anonymous: boolean
}

export interface EvaluationMember {
  identification: string
  can_view?: boolean
}
