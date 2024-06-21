import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { PostEnterpriseMember } from '@/interface/enterpriseInformation'

const inviteEnterpriseMember = async (invite_member: PostEnterpriseMember) =>
  await http.post(API_URL.ENTERPRISE_MEMBER(), invite_member)

export default inviteEnterpriseMember
