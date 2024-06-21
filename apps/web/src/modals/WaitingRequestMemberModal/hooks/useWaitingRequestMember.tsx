import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import getWaitingEnterpriseMember from '@/entities/enterprise/api/getWaitingEnterpriseMember'

const useWaitingRequestMember = () => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.WAITING_ENTERPRISE_MEMBER],
    queryFn: getWaitingEnterpriseMember,
  })

  return {
    data,
  }
}
export default useWaitingRequestMember
