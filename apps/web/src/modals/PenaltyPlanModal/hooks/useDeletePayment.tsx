import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Toast } from '@/shared/ui'
import deletePayment from '@/services/payment/deletePayment/deletePayment'
import { useTranslations } from 'next-intl'

const useDeletePayment = (email: string, onClose: () => void) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: deletePaymentMutate } = useMutation({
    mutationKey: [MUTATION_KEY.DELETE_PAYMENT],
    mutationFn: () => deletePayment(email),
    onSuccess: () => {
      Toast.success($t('penalty_payment_success'))
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
    deletePaymentMutate,
  }
}
export default useDeletePayment
