import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import { PostingRequirementResponse } from '@/services/posting/getPostingRequirement/getPostingRequirement.interface'
import getPostingRequirement from '@/services/posting/getPostingRequirement'

const usePostingRequirement = (initialData: PostingRequirementResponse) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.POSTING_REQUIREMENT],
    queryFn: getPostingRequirement,
    initialData,
  })
  return {
    data,
  }
}

export default usePostingRequirement
