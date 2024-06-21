import { QUERY_KEY } from '@/shared/constants'
import { PostingMemberResponse } from '@/interface/posting'

import getPostingMember from '@/services/posting/getPostingMember'
import { useQuery } from '@tanstack/react-query'

export const useGetPostingMember = (
  postingId: string | number,
  search?: string,
  initialData?: PostingMemberResponse,
) => {
  const { data, refetch } = useQuery({
    queryKey: [QUERY_KEY.POSTING_MEMBER, postingId],
    queryFn: () => getPostingMember(postingId, search),
    enabled: !!postingId,
    initialData: initialData,
  })
  return {
    data,
    refetch,
  }
}
