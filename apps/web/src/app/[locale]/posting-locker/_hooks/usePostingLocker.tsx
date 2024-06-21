import { useInfiniteQuery } from '@tanstack/react-query'
import { PostingLocker } from '@/interface/postingLocker'
import { QUERY_KEY } from '@/shared/constants'
import getPostingLocker from '@/services/postingLocker/getPostingLocker'

const usePostingLocker = (initialData: PostingLocker, search: string) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.POSTING_LOCKER, search],
    queryFn: ({ pageParam }) => getPostingLocker({ page: pageParam, size: 30, search }),
    initialData: {
      pages: [initialData],
      pageParams: [],
    },
    initialPageParam: 1,
    getNextPageParam: ({ current_page, last_page }) => {
      if (current_page === last_page) {
        return undefined
      }
      return current_page + 1
    },
  })
}

export default usePostingLocker
