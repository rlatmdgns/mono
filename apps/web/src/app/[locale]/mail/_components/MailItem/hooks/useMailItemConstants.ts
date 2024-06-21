import { useTranslations } from 'next-intl'

export const useMailItemConstants = () => {
  const $t = useTranslations()

  const INBOX_CONTENT: Record<number, string> = {
    0: $t('inbox_content.received_regular_email'),
    1: $t('inbox_content.interview_schedule_canceled'),
    2: $t('inbox_content.request_to_change_interview_schedule'),
    3: $t('inbox_content.sending_interview_schedule_information'),
    4: $t('inbox_content.received_additional_documents'),
  }

  const SENT_CONTENT: Record<number, string> = {
    0: $t('sent_content.sent_regular_email'),
    1: $t('sent_content.requested_interview_schedule'),
    2: $t('sent_content.requested_documents'),
  }
  return {
    INBOX_CONTENT,
    SENT_CONTENT,
  }
}
