import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { Notification } from '@/interface/notification'

const getNotification = async () => {
  return await http.get<Notification[]>(API_URL.ALARM)
}
export default getNotification
