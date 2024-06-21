import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { PaymentCard, PaymentCommonResponse } from '@/interface/payment'

const updateCard = (data: PaymentCard) => {
  return http.patch<unknown, PaymentCommonResponse>(API_URL.PAYMENT_CARD, data)
}

export default updateCard
