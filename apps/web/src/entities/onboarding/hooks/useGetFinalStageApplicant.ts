import { getFinalStageApplicant } from '@/entities/onboarding/api/getFinalStageApplicant'
import { useInfiniteQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import { FinalStageApplicantResponse } from '@/entities/onboarding/types'

export const useGetFinalStageApplicant = (
  initialData: FinalStageApplicantResponse,
  posting_id?: number,
) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.FINAL_STAGE_APPLICANT],
    queryFn: ({ pageParam }) => getFinalStageApplicant(pageParam, 20, posting_id),
    initialData: {
      pages: [initialData],
      pageParams: [],
    },
    initialPageParam: 1,
    getNextPageParam: ({ page, last_page }: FinalStageApplicantResponse) => {
      if (!page || !last_page) return
      if (page === last_page) return
      return page + 1
    },
  })
}
