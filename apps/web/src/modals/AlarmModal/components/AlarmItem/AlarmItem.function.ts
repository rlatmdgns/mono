import { NotificationLink } from '@/interface/notification'
import { PAGE } from '@/shared/constants'

export const getLink = (link: NotificationLink, title?: string) => {
  if (!link) return ''

  const { posting_id, applicant_id } = link
  const id = Number(posting_id)
  if (title === '새로운 메일 도착') {
    return `${PAGE.MAIL_INBOX}`
  }
  if (posting_id) {
    return `${PAGE.POSTINGS_DETAIL(id)}`
  }
  if (applicant_id) {
    return `${PAGE.POSTINGS_DETAIL(id)}?applicant=${applicant_id}`
  }
  return ''
}
