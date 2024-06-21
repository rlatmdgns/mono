import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'

const deleteWaitingEnterpriseMember = async (memberId: string) =>
  await http.delete(`${API_URL.ENTERPRISE_INVITED_MEMBER}/${memberId}`)

export default deleteWaitingEnterpriseMember
