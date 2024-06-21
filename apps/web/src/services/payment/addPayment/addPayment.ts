import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { AddPaymentRequest, PaymentCommonResponse } from '@/interface/payment'

const addPayment = (data: AddPaymentRequest) => {
  return http.post<AddPaymentRequest, PaymentCommonResponse>(API_URL.PAYMENT, data)
}

export default addPayment
