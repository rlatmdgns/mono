import { atom } from 'recoil'
import { Payment } from '@/interface/payment'
import { Plan } from '@/interface/plan'

export const PaymentTypeAtom = atom({
  key: 'PaymentType',
  default: 'annual',
})

export const PaymentInformationAtom = atom<Payment>({
  key: 'PaymentInformation',
  default: {
    card_name: '',
    card_number: '',
    plan_type: '',
    payment_start: '',
    payment_end: '',
    billing_email: '',
    next_payment: '',
    period_type: '',
    is_subscribed: '',
  },
})

export const PlanInformationAtom = atom<Plan>({
  key: 'PlanInformation',
  default: {
    plan_start_date: '',
    plan_end_date: '',
    is_free_plan: false,
    plan_type: '',
    period_type: '',
    penalty_charge: {
      plan_start_date: '',
      plan_end_date: '',
      discount_count: 0,
      discounted_amount: 0,
      total_amount_of_penalty_charges: 0,
    },
  },
})
