import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { HomeResponse } from '@/services/home/getHome.interface'

const getHome = () => {
  return http.get<HomeResponse>(API_URL.HOME)
}

export default getHome
