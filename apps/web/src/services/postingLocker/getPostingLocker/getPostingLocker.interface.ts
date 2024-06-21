import { PostingMember } from '@/interface/posting'
import { PostingLocker } from '@/interface/postingLocker'

export interface PostingLockerRequest {
  page: number
  size: number
  search?: string
}

export interface PostingLockerResponse {
  posting_locker: PostingLocker
  admin_members: PostingMember[]
  success: boolean
}
