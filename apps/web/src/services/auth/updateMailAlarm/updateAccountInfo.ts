import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import {
  updateMailAlarmRequest,
  updateMailAlarmResponse,
} from '@/services/auth/updateMailAlarm/interface'

const updateMailAlarm = async (data: updateMailAlarmRequest) => {
  return await http.patch<updateMailAlarmRequest, updateMailAlarmResponse>(API_URL.USER_ALARM, data)
}

export default updateMailAlarm
