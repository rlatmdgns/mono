import { QUERY_KEY } from '@/shared/constants'
import getEnterpriseMember from '@/entities/enterprise/api/getEnterpriseMember'
import { useQuery } from '@tanstack/react-query'
import { EnterpriseMemberResponse } from '@/interface/enterpriseMember'

const useGetEnterpriseMember = (searchParams: string, initialData?: EnterpriseMemberResponse) => {
  const { data, refetch } = useQuery({
    queryKey: [QUERY_KEY.ENTERPRISE_MEMBER, searchParams],
    queryFn: () => getEnterpriseMember(searchParams),
    initialData: initialData,
  })
  return {
    data,
    refetch,
  }
}
export default useGetEnterpriseMember
