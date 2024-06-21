import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import getPostingMember from '@/services/posting/getPostingMember'

const useGetPostingMember = (postingId: string) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.POSTING_MEMBER, postingId],
    queryFn: () => getPostingMember(postingId),
    enabled: !!postingId,
  })
  return {
    data,
  }
}

export default useGetPostingMember
