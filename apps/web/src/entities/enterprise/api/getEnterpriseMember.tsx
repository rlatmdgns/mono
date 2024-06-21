import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { EnterpriseMemberResponse } from '@/interface/enterpriseMember'

const getEnterpriseMember = async (searchParams: string) =>
  await http.get<EnterpriseMemberResponse>(API_URL.ENTERPRISE_MEMBER(searchParams))

export default getEnterpriseMember
