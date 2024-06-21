import { useQuery } from '@tanstack/react-query'
import getUser from '@/entities/user/api/getUser'
import { QUERY_KEY } from '@/shared/constants'
import { User } from '@/interface/user'

const useUserInfo = (initialUserInfo: User) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.USER],
    queryFn: () => getUser(),
    initialData: initialUserInfo,
  })

  return {
    user: data,
  }
}
export default useUserInfo
