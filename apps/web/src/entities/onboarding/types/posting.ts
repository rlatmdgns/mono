interface Posting {
  activate_state: number
  can_duplicate_apply: number
  can_multiple_apply: number
  can_re_apply: number
  enterprise_id: number
  posting_id: number
  posting_title: string
}

export type OmsPostings = Posting[]
