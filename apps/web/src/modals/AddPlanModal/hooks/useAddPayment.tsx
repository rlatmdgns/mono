import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Toast } from '@/shared/ui'
import { AddPaymentRequest } from '@/interface/payment'
import addPayment from '@/services/payment/addPayment/addPayment'
import { useTranslations } from 'next-intl'

const useAddPayment = (onClose: () => void) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: addPaymentMutate } = useMutation({
    mutationKey: [MUTATION_KEY.ADD_PAYMENT],
    mutationFn: (postData: AddPaymentRequest) => addPayment(postData),
    onSuccess: () => {
      Toast.success($t('payment_success'))
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
    addPaymentMutate,
  }
}
export default useAddPayment
