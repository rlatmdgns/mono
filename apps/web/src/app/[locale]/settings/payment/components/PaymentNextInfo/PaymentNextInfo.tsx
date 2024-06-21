import * as Styles from './styles'
import { getDayFormat } from '@/shared/lib/utils'
import dayjs from 'dayjs'
import { useRecoilState } from 'recoil'
import {
  PaymentInformationAtom,
  PlanInformationAtom,
} from '@/app/[locale]/settings/payment/recoil/atom'
import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { useLocale } from 'next-intl'
import { Icon } from '@repo/ui'

const PaymentNextInfo = () => {
  const [paymentInformation, setPaymentInformation] = useRecoilState(PaymentInformationAtom)

  const [planInformation, setPlanInformation] = useRecoilState(PlanInformationAtom)

  const { openModal, closeModal } = useModal()

  const currentLocale = useLocale()

  const nextPaymentTextRender = () => {
    if (currentLocale !== 'ko') {
      return (
        <>
          The next payment date is{' '}
          {getDayFormat(dayjs(paymentInformation.next_payment).toDate(), 'YY-MM-DD')}
        </>
      )
    }
    return (
      <>
        다음 결제일은
        {getDayFormat(dayjs(paymentInformation.next_payment).toDate(), 'YYYY년 MM월 DD일')}
        입니다.
      </>
    )
  }

  const nextPaymentExpiredTextRender = () => {
    if (currentLocale !== 'ko') {
      return (
        <>
          {planInformation.is_free_plan ? '무료 체험' : '구독 플랜'} will end on{' '}
          {getDayFormat(dayjs(planInformation.plan_end_date).toDate(), 'MMMM DD, YYYY')}.
        </>
      )
    }
    return (
      <>
        {getDayFormat(dayjs(planInformation.plan_end_date).toDate(), 'YYYY년 MM월 DD일')}에{' '}
        {planInformation.is_free_plan ? '무료 체험' : '구독 플랜'}이 종료됩니다.
      </>
    )
  }

  const handlePlanInformationModal = () => {
    if (planInformation.is_free_plan) return
    if (!paymentInformation) return

    openModal(MODAL.PLAN_INFORMATION, {
      onClick: () => {
        closeModal(MODAL.PLAN_INFORMATION)
      },
    })
  }
  return (
    <>
      {!!paymentInformation?.next_payment && (
        <Styles.NextPayment
          $isNextPayment={planInformation.is_free_plan}
          onClick={() => handlePlanInformationModal()}
        >
          <Icon icon="icon/info-solid" color="blue500" size={24} />
          {nextPaymentTextRender()}
          <Styles.ArrowIconBox>
            <Icon icon="icon/right-line" color="neutralGray500" size={16} />
          </Styles.ArrowIconBox>
        </Styles.NextPayment>
      )}
      {!paymentInformation?.next_payment && planInformation.plan_end_date && (
        <Styles.NextPayment
          $isNextPayment={planInformation.is_free_plan || !paymentInformation}
          onClick={() => handlePlanInformationModal()}
        >
          <Icon icon="icon/info-solid" color="blue500" size={24} />
          {nextPaymentExpiredTextRender()}
          <Styles.ArrowIconBox>
            <Icon icon="icon/right-line" color="neutralGray500" size={16} />
          </Styles.ArrowIconBox>
        </Styles.NextPayment>
      )}
    </>
  )
}

export default PaymentNextInfo
