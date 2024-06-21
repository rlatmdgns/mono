import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'

const restorePostingLocker = async (id: number) =>
  await http.put(API_URL.POSTING_LOCKER_RESTORE, {
    posting_id: id,
  })

export default restorePostingLocker
