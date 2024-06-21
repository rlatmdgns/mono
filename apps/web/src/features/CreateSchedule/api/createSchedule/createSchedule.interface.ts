export interface CreateScheduleRequest {
  posting_id: number | string
  schedule_title: string
  schedule_applicant: string[]
  schedule_attendant: string[]
  schedule_date: string
  start_time: string
  end_time: string
  schedule_address: string
  schedule_detail_address: string
  schedule_alarm: string
}
