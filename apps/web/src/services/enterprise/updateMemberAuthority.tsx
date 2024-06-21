import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { UpdateMemberAuthority } from '@/interface/enterpriseInformation'

const updateMemberAuthority = async (member: UpdateMemberAuthority) =>
  await http.put(API_URL.ENTERPRISE_MEMBER(), member)

export default updateMemberAuthority
