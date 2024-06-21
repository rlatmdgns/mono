export const MAIL_ALARM_LIST: {
  ko: string
  en: string
  type: string
  image: string
}[] = [
  {
    ko: '새로운 지원자 알림',
    en: 'New Applicant Notification',
    type: 'can_alert_new_applicants',
    image: 'icon/member-solid',
  },
  {
    ko: '면접 일정 리마인드 알림',
    en: 'Interview Schedule Reminder',
    type: 'can_alert_interview_reminders',
    image: 'icon/calendar-solid',
  },
  {
    ko: '면접 확정 알림',
    en: 'Interview Confirmation Notification',
    type: 'can_alert_interview_fixed',
    image: 'icon/interview-complete-solid',
  },
  {
    ko: '지원자 답장 알림',
    en: 'Applicant Response Notification',
    type: 'can_alert_applicant_responses',
    image: 'icon/comment-solid',
  },
]
