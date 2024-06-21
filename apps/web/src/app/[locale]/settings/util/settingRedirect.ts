import getServerUser from '@/entities/user/api/getServerUser'
import { AUTHORITY, PAGE } from '@/shared/constants'
import { redirect } from 'next/navigation'

const settingRedirect = async () => {
  const result = await getServerUser()
  const isAdmin = result.user_authority === AUTHORITY.ADMIN
  if (!isAdmin) return redirect(PAGE.PLAN_EXPIRED)
}
export default settingRedirect
