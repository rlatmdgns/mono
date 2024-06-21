import { PostingSortRequest } from './updatePostingSort.interface'
import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'

const updatePostingSort = async (posting: PostingSortRequest) =>
  await http.put(API_URL.POSTING_SORT, posting)

export default updatePostingSort
