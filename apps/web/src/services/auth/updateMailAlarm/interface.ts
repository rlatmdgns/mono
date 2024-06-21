export interface updateMailAlarmRequest {
  alarm_type:
    | 'can_alert_new_applicants'
    | 'can_alert_interview_reminders'
    | 'can_alert_interview_fixed'
    | 'can_alert_applicant_responses'
}

export interface updateMailAlarmResponse {
  success: boolean
}
