import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import {
  PostingLockerRequest,
  PostingLockerResponse,
} from '@/services/postingLocker/getPostingLocker/getPostingLocker.interface'

const getPostingLocker = async (params: PostingLockerRequest) => {
  const { posting_locker } = await http.post<any, PostingLockerResponse>(
    API_URL.POSTING_LOCKER(params.page),
    {
      size: params.size,
      search: params.search,
    },
  )
  return posting_locker
}

export default getPostingLocker
