import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import getEnterpriseInformation from '@/entities/enterprise/api/getEnterpriseInformation'
import { EnterpriseInformationResponse } from '@/interface/enterpriseInformation'

const useEnterprise = (initialData?: EnterpriseInformationResponse) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.ENTERPRISE_INFORMATION],
    queryFn: () => getEnterpriseInformation(),
    initialData,
  })

  return {
    data,
  }
}
export default useEnterprise
