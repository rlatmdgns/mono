import { API_URL } from '@/shared/constants'
import { Postings } from '@/interface/postings'
import { serverHttp } from '@/shared/lib/serverHttp'

const getServerPostings = () => {
  return serverHttp.get<Postings>(API_URL.POSTINGS)
}

export default getServerPostings
