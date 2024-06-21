import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { PaymentCommonResponse } from '@/interface/payment'

const deleteCard = () => {
  return http.delete<unknown, PaymentCommonResponse>(API_URL.PAYMENT_CARD)
}

export default deleteCard
