export interface UserInfo {
  user_email: string
  user_name: string
  user_phone: string
  user_profile: string
  user_department?: string | null
  user_job?: string | null
}

export interface User extends UserInfo {
  user_login_type: string
  can_alert_new_applicants: boolean
  can_alert_interview_reminders: boolean
  can_alert_interview_fixed: boolean
  can_alert_applicant_responses: boolean
  user_type: string
  user_authority: string
  CONNECT_GOOGLE: {
    connect: boolean
    calendar_name?: string
    calendar_state: boolean
  }
}
