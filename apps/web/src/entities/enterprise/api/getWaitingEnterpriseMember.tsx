import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { WaitingMemberResponse } from '@/interface/member'

const getWaitingEnterpriseMember = async () =>
  await http.get<WaitingMemberResponse>(API_URL.ENTERPRISE_INVITED_MEMBER)

export default getWaitingEnterpriseMember
