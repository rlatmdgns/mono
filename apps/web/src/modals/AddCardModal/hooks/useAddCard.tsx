import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Toast } from '@/shared/ui'
import { PaymentCard } from '@/interface/payment'
import addCard from '@/services/payment/addCard/addCard'
import { useTranslations } from 'next-intl'

const useAddCard = (onClose: () => void) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: addCardMutate } = useMutation({
    mutationKey: [MUTATION_KEY.ADD_PAYMENT_CARD],
    mutationFn: (postData: PaymentCard) => addCard(postData),
    onSuccess: () => {
      Toast.success($t('card_register_success'))
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
    addCardMutate,
  }
}
export default useAddCard
