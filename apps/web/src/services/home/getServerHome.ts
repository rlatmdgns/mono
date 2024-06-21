import { API_URL } from '@/shared/constants/apiUrl'
import { serverHttp } from '@/shared/lib/serverHttp'
import { HomeResponse } from '@/services/home/getHome.interface'

const getServerHome = () => {
  return serverHttp.get<HomeResponse>(API_URL.HOME)
}

export default getServerHome
