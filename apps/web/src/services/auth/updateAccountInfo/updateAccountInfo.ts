import { http } from '@/shared/lib/http'
import { UserInfo } from '@/interface/user'
import { API_URL } from '@/shared/constants'
import { UpdateAccountInfoResponse } from '@/services/auth/updateAccountInfo/interface'

const updateAccountInfo = async (data: UserInfo) => {
  return await http.patch<UserInfo, UpdateAccountInfoResponse>(API_URL.USER, data)
}

export default updateAccountInfo
