export interface CancelCharge {
  plan_start_date: string
  plan_end_date: string
  discount_count: number
  discounted_amount: number
  total_amount_of_penalty_charges: number
}

export interface Plan {
  plan_start_date: string
  plan_end_date: string
  is_free_plan: boolean
  plan_type: string
  period_type: string
  penalty_charge: CancelCharge
}

export interface PlanResponse {
  success: boolean
  plan: Plan
}
