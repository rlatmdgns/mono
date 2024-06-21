import { API_URL } from '@/shared/constants'
import { PostingRequirementResponse } from '@/services/posting/getPostingRequirement/getPostingRequirement.interface'
import { http } from '@/shared/lib/http'

const getPostingRequirement = () => {
  return http.get<PostingRequirementResponse>(API_URL.POSTING_REQUIREMENT)
}

export default getPostingRequirement
