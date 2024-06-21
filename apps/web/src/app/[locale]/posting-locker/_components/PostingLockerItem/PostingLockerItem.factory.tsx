import { Posting } from '@/interface/postingLocker'
import { convertDateFormat } from '@/shared/lib/utils'

export const postingLockerDataForRender = (posting: Posting) => {
  return {
    id: posting.posting_id,
    title: posting.posting_title,
    count: posting.applicants_count,
    isMember: posting.posting_member,
    members: posting.posting_members,
    date: convertDateFormat(posting.posting_date),
    closeDate: posting.close_date ? convertDateFormat(posting.close_date) : '-',
  }
}
