import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import updateBillingEmail from '@/services/payment/updateBillingEmail/updateBillingEmail'
import { useTranslations } from 'next-intl'

const useUpdateBillingEmail = (email: string, onClose: () => void) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: updateBillingEmailMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_BILLING_EMAIL],
    mutationFn: () => updateBillingEmail(email),
    onSuccess: () => {
      Toast.success($t('change_payment_email_success'))
      onClose()
      const queryKeys = [QUERY_KEY.PLAN, QUERY_KEY.PAYMENT]
      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
    },
    onError: (error: Error) => {
      Toast.error(error.message)
    },
  })
  return { updateBillingEmailMutate }
}

export default useUpdateBillingEmail
