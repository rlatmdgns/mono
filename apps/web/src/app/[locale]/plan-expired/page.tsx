import PlanExpiredContainer from '@/app/[locale]/plan-expired/_components/PlanExpiredContainer'
import getServerUser from '@/entities/user/api/getServerUser'
import getServerEnterpriseInformation from '@/entities/enterprise/api/getServerEnterpriseInformation'
import { AUTHORITY } from '@/shared/constants'

export default async function PaymentExpiredPage() {
  const user = await getServerUser()
  const enterpriseInfo = await getServerEnterpriseInformation()
  const isAdmin = user.user_authority === AUTHORITY.ADMIN
  const enterpriseName = enterpriseInfo.enterprise.enterprise_name
  return <PlanExpiredContainer isAdmin={isAdmin} enterpriseName={enterpriseName} />
}
