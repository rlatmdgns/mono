import * as Styles from './styles'
import PaymentRow from '@/app/[locale]/settings/payment-history/components/PaymentRow'
import { PaymentLog, PaymentLogHeaderInterface } from '@/interface/payment'

interface PaymentListProps {
  paymentLogHeaders: PaymentLogHeaderInterface[]
  paymentLogs: PaymentLog[]
}

const PaymentList = ({ paymentLogHeaders, paymentLogs }: PaymentListProps) => {
  return (
    <Styles.PaymentList>
      <PaymentRow paymentLogHeaders={paymentLogHeaders} paymentLogs={paymentLogs} />
    </Styles.PaymentList>
  )
}
export default PaymentList
