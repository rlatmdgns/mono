import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { Payment, PaymentResponse } from '@/interface/payment'

const getPayment = async () => {
  return await http.get<PaymentResponse>(`${API_URL.PAYMENT}`, 'no-cache')
}

export default getPayment
