import { API_URL } from '@/shared/constants'
import { Postings } from '@/interface/postings'
import { serverHttp } from '@/shared/lib/serverHttp'

const getSeverInvitedPostings = () => {
  return serverHttp.get<Postings>(API_URL.INVITED_POSTINGS)
}

export default getSeverInvitedPostings
