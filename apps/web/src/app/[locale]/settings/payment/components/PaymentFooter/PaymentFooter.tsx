import * as Styles from './styles'
import { Button } from '@/shared/ui'
import { useModal } from '@/shared/hooks'
import { MODAL } from '@/shared/constants'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
  PaymentInformationAtom,
  PaymentTypeAtom,
  PlanInformationAtom,
} from '@/app/[locale]/settings/payment/recoil/atom'
import { getMakeComma } from '@/shared/lib/utils'
import { useLocale, useTranslations } from 'next-intl'
import usePaymentContainerConstant from '@/app/[locale]/settings/payment/hooks/usePaymentContainerConstant'

const PaymentFooter = () => {
  const { PLAN } = usePaymentContainerConstant()
  const currentLocale = useLocale()

  const { openModal, closeModal } = useModal()
  const [currentType, setCurrentType] = useRecoilState(PaymentTypeAtom)
  const paymentInfo = useRecoilValue(PaymentInformationAtom)
  const planInfo = useRecoilValue(PlanInformationAtom)
  // TODO : 영문의 경우, $144 고정, 추후 수정 예정
  const cost =
    currentLocale === 'ko'
      ? `${getMakeComma(PLAN.COST[currentType])}원 / 월`
      : '$144 / month billed annually'

  const costWidth = currentLocale === 'ko' ? '120px' : '250px'
  const isFree = planInfo?.is_free_plan || !paymentInfo?.next_payment
  const isPenalty =
    planInfo?.period_type === 'annual' &&
    !planInfo?.is_free_plan &&
    planInfo?.penalty_charge?.total_amount_of_penalty_charges > 0
  const isUpgrade = planInfo?.period_type === 'monthly' && !planInfo?.is_free_plan

  const $t = useTranslations('payment')

  const handlePaymentTypeChange = (type: string) => {
    setCurrentType(type)
  }

  const handleSetPlan = (status?: boolean) => {
    /**
     * 무료 요금제일 때, 플랜 결제 모달 오픈
     */
    if (isFree) {
      return openModal(MODAL.ADD_PLAN, {
        currentType,
        onClose: () => closeModal(MODAL.ADD_PLAN),
      })
    }

    /**
     * 연간 요금제를 사용중이고, 구독중인 경우 패널티 모달 오픈
     */
    if (isPenalty) {
      return openModal(MODAL.PENALTY_PLAN, {
        currentType,
        onClose: () => closeModal(MODAL.PENALTY_PLAN),
      })
    }

    /**
     *  7일이내 플랜 유형 변경으로 패널티가 없는 경우 or 월간 요금제를 사용중이고, 연간 요즘제로 변경 모달 오픈
     */
    if (!isPenalty || isUpgrade) {
      return openModal(MODAL.UPGRADE_PLAN, {
        currentType,
        onClose: () => closeModal(MODAL.UPGRADE_PLAN),
      })
    }
  }

  const isPayment = currentType === paymentInfo?.period_type && paymentInfo.next_payment

  return (
    <Styles.Footer>
      <Styles.PaymentTypeList>
        <Styles.Type
          $isActive={currentType === 'annual'}
          onClick={() => handlePaymentTypeChange('annual')}
        >
          <Styles.Icon />
          {$t('payment_auto_type.annual')}
        </Styles.Type>
        <Styles.Type
          $isActive={currentType === 'monthly'}
          onClick={() => handlePaymentTypeChange('monthly')}
        >
          <Styles.Icon />
          {$t('payment_auto_type.monthly')}
        </Styles.Type>
      </Styles.PaymentTypeList>
      {!isPayment && <Button text={cost} width={costWidth} onClick={handleSetPlan} />}
      {isPayment && (
        <Styles.PaymentButtonWrapper>
          <Button text={$t('current_subscription_plan')} disabled />
        </Styles.PaymentButtonWrapper>
      )}
    </Styles.Footer>
  )
}
export default PaymentFooter
