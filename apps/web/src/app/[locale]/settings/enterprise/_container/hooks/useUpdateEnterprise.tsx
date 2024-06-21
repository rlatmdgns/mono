import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Toast } from '@/shared/ui'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import updateEnterprise from '@/services/enterprise/updateEnterpriseInformation'
import { Enterprise } from '@/interface/enterpriseInformation'
import { useTranslations } from 'next-intl'

const useEnterpriseContainer = () => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: updateEnterpriseMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_ENTERPRISE],
    mutationFn: (data: Enterprise) => updateEnterprise(data),
    onSuccess: () => {
      Toast.success($t('enterprise_information_change_success'))
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.ENTERPRISE_INFORMATION],
      })
    },
    onError: () => {
      Toast.error($t('enterprise_information_change_fail'))
    },
  })
  return {
    updateEnterpriseMutate,
  }
}
export default useEnterpriseContainer
