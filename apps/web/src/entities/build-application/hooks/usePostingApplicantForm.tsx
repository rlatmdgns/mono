import { useQuery } from '@tanstack/react-query'
import { getPostingApplicantForm } from '@/entities/build-application/api/getPostingApplicantForm'
import { QUERY_KEY } from '@/shared/constants'
import { PostingApplicationFormResponse } from '@/entities/recruit/types/PostingApplicationForm'

export const usePostingApplicantForm = (
  id: string,
  initialData?: PostingApplicationFormResponse,
) => {
  const { data, isFetching } = useQuery({
    queryKey: [QUERY_KEY.POSTING_APPLICANT_FORM, id],
    queryFn: () => getPostingApplicantForm(id),
    enabled: !!id,
    initialData,
  })

  return {
    data,
    isFetching,
  }
}
