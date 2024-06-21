import { API_URL } from '@/shared/constants'
import { User } from '@/interface/user'
import { serverHttp } from '@/shared/lib/serverHttp'

const getServerUser = async () => {
  return await serverHttp.get<User>(API_URL.USER)
}

export default getServerUser
