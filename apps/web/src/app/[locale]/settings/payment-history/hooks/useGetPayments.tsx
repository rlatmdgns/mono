import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import getPayments from '@/services/payment/getPayments'

const useGetPayments = () => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.PAYMENTS],
    queryFn: () => getPayments(),
  })
  return {
    paymentData: data,
  }
}

export default useGetPayments
