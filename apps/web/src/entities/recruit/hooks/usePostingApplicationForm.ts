import { useQuery } from '@tanstack/react-query'
import { getPostingApplicationForm } from '@/entities/recruit/api/getPostingApplicationForm'
import { QUERY_KEY } from '@/shared/constants'
import { PostingApplicationFormResponse } from '@/entities/recruit/types/PostingApplicationForm'

export const usePostingApplicationForm = (
  id: string,
  enterpriseRecruitUrl: string,
  initialData?: PostingApplicationFormResponse,
) => {
  const { data, isFetching } = useQuery<PostingApplicationFormResponse>({
    queryKey: [QUERY_KEY.POSTING_APPLICATION_FORM, id],
    queryFn: () => getPostingApplicationForm(id, enterpriseRecruitUrl),
    enabled: !!id,
    initialData,
  })

  return {
    data,
    isFetching,
  }
}
