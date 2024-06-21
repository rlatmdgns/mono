export interface ScheduleSearchParams {
  interviewer: string[]
  start_date: string
  end_date: string
}

export interface OverlappingSchedule {
  schedule_id: number
  schedule_start: string
  schedule_end: string
  overlapping_interviewers: string[]
}

export interface GoogleSchedules {
  summary: string
  start: string
  end: string
  overlapping_interviewers: string[]
}

export interface ScheduleSearchResponse {
  success: boolean
  schedules: OverlappingSchedule[]
}
