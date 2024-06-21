interface Slack {
  channel: string | null
  is_used: boolean
  can_alert_applicant_responses: boolean
  can_alert_interview_fixed: boolean
  can_alert_interview_reminders: boolean
  can_alert_new_applicants: boolean
}

export interface SlackAlertValues {
  can_alert_applicant_responses: boolean
  can_alert_interview_fixed: boolean
  can_alert_interview_reminders: boolean
  can_alert_new_applicants: boolean
}

export interface GetConnectSlackResponse {
  slack: Slack
  success: boolean
}
