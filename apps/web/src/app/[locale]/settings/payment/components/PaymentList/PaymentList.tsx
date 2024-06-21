import * as Styles from './styles'
import { useRecoilValue } from 'recoil'
import PlanDetailList from '@/app/[locale]/settings/payment/components/PlanDetailList'
import { PaymentInformationAtom } from '@/app/[locale]/settings/payment/recoil/atom'
import DOMPurify from 'dompurify'
import usePaymentContainerConstant from '@/app/[locale]/settings/payment/hooks/usePaymentContainerConstant'

const PaymentList = () => {
  const { PLAN } = usePaymentContainerConstant()
  const paymentInformation = useRecoilValue(PaymentInformationAtom)

  const planDetail = []
  for (let key in PLAN.DETAIL) {
    planDetail.push(PLAN.DETAIL[key])
  }
  return (
    <Styles.PaymentList $isSubscribed={!!paymentInformation?.is_subscribed}>
      <Styles.Plan>
        <Styles.Title>{PLAN.PLAN_EXPLAIN.title}</Styles.Title>
        <Styles.Desc
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(PLAN.PLAN_EXPLAIN.desc),
          }}
        ></Styles.Desc>
      </Styles.Plan>
      {planDetail.map((detail, index) => (
        <PlanDetailList key={`plan_${index}`} detail={detail} />
      ))}
    </Styles.PaymentList>
  )
}

export default PaymentList
