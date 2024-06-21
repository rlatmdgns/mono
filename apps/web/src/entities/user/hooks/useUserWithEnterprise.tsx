import { useQueries } from '@tanstack/react-query'
import getUser from '@/entities/user/api/getUser'
import { QUERY_KEY } from '@/shared/constants'
import getEnterpriseInformation from '@/entities/enterprise/api/getEnterpriseInformation'
import { User } from '@/interface/user'
import { EnterpriseInformationResponse } from '@/interface/enterpriseInformation'

const useUserWithEnterprise = (
  initialUser?: User,
  initialEnterpriseInformation?: EnterpriseInformationResponse,
) => {
  const result = useQueries({
    queries: [
      {
        queryKey: [QUERY_KEY.USER],
        queryFn: () => getUser(),
        initialData: initialUser,
      },
      {
        queryKey: [QUERY_KEY.ENTERPRISE_INFORMATION],
        queryFn: () => getEnterpriseInformation(),
        initialData: initialEnterpriseInformation,
      },
    ],
  })

  return {
    user: result[0].data,
    enterpriseInformation: result[1]?.data?.enterprise,
  }
}
export default useUserWithEnterprise
