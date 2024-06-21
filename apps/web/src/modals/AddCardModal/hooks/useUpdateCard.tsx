import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Toast } from '@/shared/ui'
import { PaymentCard } from '@/interface/payment'
import updateCard from '@/services/payment/updateCard/updateCard'
import { useTranslations } from 'next-intl'

const useUpdateCard = (onClose: () => void) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: updateCardMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_PAYMENT_CARD],
    mutationFn: (postData: PaymentCard) => updateCard(postData),
    onSuccess: () => {
      Toast.success($t('card_modify_success'))
      onClose()
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.PAYMENT],
      })
    },
    onError: (error) => {
      Toast.error(`${error.message}`)
    },
  })

  return {
    updateCardMutate,
  }
}
export default useUpdateCard
