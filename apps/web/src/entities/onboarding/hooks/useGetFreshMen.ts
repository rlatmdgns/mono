import { getFreshMen } from '@/entities/onboarding/api/getFreshMen'
import { useInfiniteQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import { FreshMenResponse } from '@/entities/onboarding/types'

export const useGetFreshMen = (initialData: FreshMenResponse) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.FRESHMEN],
    queryFn: ({ pageParam }) => getFreshMen(pageParam, 20),
    initialData: {
      pages: [initialData],
      pageParams: [],
    },
    initialPageParam: 1,
    getNextPageParam: ({ page, last_page }: FreshMenResponse) => {
      if (page === last_page) {
        return
      }
      return page + 1
    },
  })
}
