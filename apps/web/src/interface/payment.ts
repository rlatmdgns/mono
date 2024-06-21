export interface PaymentCommonResponse {
  success: boolean
  message?: string
}

export interface PaymentCard {
  card_number: string
  card_password: string
  card_expire_year: string
  card_expire_month: string
  card_identity_number: string
}

export interface CardInformation {
  card_name: string
  card_number: string
}

export interface Payment {
  card_name: string
  card_number: string
  plan_type: string
  payment_start?: string
  payment_end?: string
  billing_email?: string
  next_payment?: string
  is_subscribed?: string
  payment_plan?: string
  send_email?: string
  created_at?: string
  period_type?: string
}

export interface AddPaymentRequest {
  period_type: string
  billing_email: string
}

export interface UpdateBillingEmailRequest {
  billing_email: string
}

export interface PaymentResponse extends PaymentCommonResponse {
  payment_information: Payment
  payment_list: any[]
}

export interface PaymentLogHeaderInterface {
  [index: string]: string

  ko: string
  en: string
}

export interface PaymentLog {
  plan_type: string
  period_type: string
  discount: number
  amount: number
  receipt_url: string
  payment_date: string
  is_paid: boolean
}

export interface PaymentsResponse extends PaymentCommonResponse {
  payment_log: PaymentLog[]
}
