import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { PaymentCommonResponse } from '@/interface/payment'

const updateBillingEmail = async (email: string) => {
  return await http.patch<unknown, PaymentCommonResponse>(`${API_URL.PAYMENT}`, {
    billing_email: email,
  })
}

export default updateBillingEmail
