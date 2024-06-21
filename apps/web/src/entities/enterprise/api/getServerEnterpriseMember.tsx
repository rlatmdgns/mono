import { API_URL } from '@/shared/constants'
import { EnterpriseMemberResponse } from '@/interface/enterpriseMember'
import { serverHttp } from '@/shared/lib/serverHttp'

const getServerEnterpriseMember = async () =>
  await serverHttp.get<EnterpriseMemberResponse>(API_URL.ENTERPRISE_MEMBER())

export default getServerEnterpriseMember
