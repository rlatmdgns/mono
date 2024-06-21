import { API_URL } from '@/shared/constants'
import { Postings } from '@/interface/postings'
import { http } from '@/shared/lib/http'

const getPostings = () => {
  return http.get<Postings>(API_URL.POSTINGS)
}

export default getPostings
