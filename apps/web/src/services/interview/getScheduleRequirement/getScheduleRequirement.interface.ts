import { Applicant } from '@/interface/applicants'
import { PostingMember } from '@/interface/posting'

export interface ScheduleRequirementResponse {
  applicant: Applicant[]
  posting_member: PostingMember[]
  admin_member: PostingMember[]
}
