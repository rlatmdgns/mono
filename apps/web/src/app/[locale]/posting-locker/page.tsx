import PostingLockerContainer from '@/app/[locale]/posting-locker/_components/PostingLockerContainer'
import { API_URL } from '@/shared/constants'
import { serverHttp } from '@/shared/lib/serverHttp'
import { PostingLockerResponse } from '@/services/postingLocker/getPostingLocker/getPostingLocker.interface'

export default async function PostingLockerPage() {
  const result = await getPostingLockers()
  const initialData = result.posting_locker
  return <PostingLockerContainer initialData={initialData} adminMembers={result.admin_members} />
}

const getPostingLockers = () => {
  return serverHttp.post<any, PostingLockerResponse>(API_URL.POSTING_LOCKER(1), {
    size: 30,
  })
}
