import { QUERY_KEY } from '@/shared/constants'
import { useSuspenseQuery } from '@tanstack/react-query'
import getPosting from '@/services/posting/getPosting'
import { PostingResponse } from '@/interface/posting'

const usePosting = (postingId: string, initialData: PostingResponse) => {
  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEY.POSTING, postingId],
    queryFn: () => getPosting(postingId),
    initialData: initialData,
  })
  return {
    data,
  }
}

export default usePosting
