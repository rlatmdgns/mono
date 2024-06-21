import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { AddPaymentRequest, PaymentCommonResponse } from '@/interface/payment'

const updatePayment = (data: AddPaymentRequest) => {
  return http.patch<unknown, PaymentCommonResponse>(API_URL.PLAN, data)
}

export default updatePayment
