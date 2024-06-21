import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Toast } from '@/shared/ui'
import updatePayment from '@/services/payment/updatePayment'
import { AddPaymentRequest } from '@/interface/payment'
import { useTranslations } from 'next-intl'

const useUpgradePayment = (onClose: () => void) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: upgradePaymentMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPGRADE_PAYMENT],
    mutationFn: (data: AddPaymentRequest) => updatePayment(data),
    onSuccess: () => {
      Toast.success($t('change_plan_success'))
      onClose()

      const queryKeys = [QUERY_KEY.PLAN, QUERY_KEY.PAYMENT]

      return queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
    },
    onError: (error) => {
      Toast.error(`${error.message}`)
    },
  })

  return {
    upgradePaymentMutate,
  }
}
export default useUpgradePayment
