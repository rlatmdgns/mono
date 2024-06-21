import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'

interface EnterpriseMemberCheckData {
  [index: string]: string[]

  invalid_member: string[]
  invited_member: string[]
  registered_member: string[]
  valid_member: string[]
}

interface EnterpriseMemberCheckResponse {
  data?: EnterpriseMemberCheckData
  message?: string
  success: boolean
}

const getEnterpriseMemberCheck = async (emails: string) =>
  await http.get<EnterpriseMemberCheckResponse>(API_URL.ENTERPRISE_MEMBER_CHECK(emails))

export default getEnterpriseMemberCheck
