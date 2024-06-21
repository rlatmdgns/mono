import * as Styles from './styles'
import {
  PaymentInformationAtom,
  PaymentTypeAtom,
} from '@/app/[locale]/settings/payment/recoil/atom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useTranslations } from 'next-intl'

const AddPlanInformation = () => {
  const [currentType, setCurrentType] = useRecoilState(PaymentTypeAtom)
  const paymentInformation = useRecoilValue(PaymentInformationAtom)
  const $t = useTranslations()

  const changePaymentType = (type: string) => {
    setCurrentType(type)
  }
  return (
    <Styles.PlanInfo>
      <Styles.Info>
        <Styles.Title>{$t('payment.plan_name')}</Styles.Title>
        <Styles.Desc>{$t('common.all_in_one_plan')}</Styles.Desc>
      </Styles.Info>
      <Styles.Info>
        <Styles.Title>{$t('payment.payment_interval')}</Styles.Title>
        <Styles.PaymentTypeList>
          <Styles.Type
            $isActive={currentType === 'annual'}
            onClick={() => changePaymentType('annual')}
          >
            <Styles.Icon />
            {$t('payment.payment_type.annual')}
          </Styles.Type>
          <Styles.Type
            $isActive={currentType === 'monthly'}
            onClick={() => changePaymentType('monthly')}
          >
            <Styles.Icon />
            {$t('payment.payment_type.monthly')}
          </Styles.Type>
        </Styles.PaymentTypeList>
      </Styles.Info>
      <Styles.Info>
        <Styles.Title>{$t('payment.period')}</Styles.Title>
        <Styles.Desc>{$t('common.all_in_one_plan')}</Styles.Desc>
      </Styles.Info>
    </Styles.PlanInfo>
  )
}
export default AddPlanInformation
