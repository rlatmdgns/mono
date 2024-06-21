import HistoryContainer from '@/app/[locale]/settings/payment-history/container/HistoryContainer/HistoryContainer'
import settingRedirect from '@/app/[locale]/settings/util/settingRedirect'

const PaymentHistoryPage = async () => {
  await settingRedirect()

  return <HistoryContainer />
}
export default PaymentHistoryPage
