import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'

const storePostingLocker = async (id: number) =>
  await http.put(API_URL.POSTING_LOCKER_STORE, {
    posting_id: [id],
  })

export default storePostingLocker
