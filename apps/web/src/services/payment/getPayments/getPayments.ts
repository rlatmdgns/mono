import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { PaymentsResponse } from '@/interface/payment'

const getPayments = async () => {
  return await http.get<PaymentsResponse>(`${API_URL.PAYMENTS}`, 'no-cache')
}

export default getPayments
