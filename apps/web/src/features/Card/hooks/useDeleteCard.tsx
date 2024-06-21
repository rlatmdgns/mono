import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Toast } from '@/shared/ui'
import deleteCard from '@/services/payment/deleteCard/deleteCard'
import { useTranslations } from 'next-intl'

const useDeleteCard = () => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: deleteCardMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_PAYMENT_CARD],
    mutationFn: () => deleteCard(),
    onSuccess: () => {
      Toast.success($t('delete_card_success'))
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.PAYMENT],
      })
    },
    onError: (error) => {
      Toast.error(`${error.message}`)
    },
  })

  return {
    deleteCardMutate,
  }
}
export default useDeleteCard
