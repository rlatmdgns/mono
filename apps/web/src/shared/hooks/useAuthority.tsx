import { useRecoilValue } from 'recoil'
import { userAtom } from '@/shared/model/user/atom'

export const useAuthority = () => {
  const user = useRecoilValue(userAtom)
  const authority = user.enterprise?.user_authority
  const isPlan = user.enterprise?.plan
  const email = user.user_email
  const enterprise = user.enterprise

  return { authority, isPlan, email, enterprise }
}
