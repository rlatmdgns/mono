import { API_URL } from '@/shared/constants'
import { Postings } from '@/interface/postings'
import { http } from '@/shared/lib/http'

const getInvitedPostings = () => {
  return http.get<Postings>(API_URL.INVITED_POSTINGS)
}

export default getInvitedPostings
