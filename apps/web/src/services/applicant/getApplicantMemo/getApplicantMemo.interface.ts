export interface Memo {
  applicant_memo_id: number
  applicant_memo_title: string
  applicant_memo_description: string
  user_name: string
  user_profile: string
  is_access: boolean
}

export interface getApplicantMemoResponse {
  is_my_memo: boolean
  memos?: Memo[]
}
