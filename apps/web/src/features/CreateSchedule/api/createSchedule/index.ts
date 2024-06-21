import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { CreateScheduleRequest } from './createSchedule.interface'

export const createSchedule = (data: CreateScheduleRequest) => {
  return http.post(API_URL.SCHEDULE, data)
}
