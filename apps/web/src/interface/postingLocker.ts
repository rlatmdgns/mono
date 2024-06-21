import { PostingMember } from '@/interface/posting'

export interface PostingLocker {
  current_page: number
  data: Posting[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url?: string
  next_page_url?: string
  path: string
  per_page: string
  prev_page_url?: string
  to: number
  total: number
}

export interface Posting {
  posting_color: string
  posting_date: string
  close_date: string
  posting_id: number
  posting_member: boolean
  posting_title: string
  applicants_count: number
  posting_members: PostingMember[]
}
