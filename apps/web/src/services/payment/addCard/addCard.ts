import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { PaymentCard, PaymentCommonResponse } from '@/interface/payment'

const addCard = (data: PaymentCard) => {
  return http.post<unknown, PaymentCommonResponse>(API_URL.PAYMENT_CARD, data)
}

export default addCard
