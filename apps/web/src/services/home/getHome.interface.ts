import { PostingData, PostingMember } from '@/interface/posting'
import { OnComingSchedule } from '@/interface/schedules'

export interface HomeResponse {
  schedule: OnComingSchedule[]
  proceeding_posting: ProceedingPosting[]
  admin_member: PostingMember[]
}

export interface ProceedingPosting extends PostingData {
  total_applicants_count: number
  pass_applicants_count: number
  fail_applicants_count: number
  is_access: boolean
}
