import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { PaymentCommonResponse } from '@/interface/payment'

const deletePayment = (email: string) => {
  return http.delete<unknown, PaymentCommonResponse>(API_URL.DELETE_PAYMENT(email))
}

export default deletePayment
