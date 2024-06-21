export interface ApplicantEvaluationTablesResponse {
  evaluation_v2_id: number
  tables?: ApplicantEvaluationTable[]
}

export interface ApplicantEvaluationTable {
  table_id: string
  table_title: string
  evaluation_table_status: string
  members: ApplicantEvaluationTableMember[]
  members_count: number
  submitted_count: number
  is_my_evaluation_submitted: boolean
  is_access: boolean
}

export interface ApplicantEvaluationTableMember {
  identification: string
  user_profile: string
  user_name: string
  user_authority: string
  is_member_evaluation_submitted?: boolean
  access?: boolean
}
