import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import { ScheduleParams } from '@/interface/schedules'
import getPayment from '@/services/payment/getPayment'

const useGetPayment = () => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.PAYMENT],
    queryFn: () => getPayment(),
  })
  return {
    paymentData: data,
  }
}

export default useGetPayment
