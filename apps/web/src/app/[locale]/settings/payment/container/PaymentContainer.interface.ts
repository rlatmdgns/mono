export interface Cost {
  [index: string]: number
  monthly: number
  annual: number
}

export interface PlanExplain {
  title: string
  desc: string
}
export interface Detail {
  [index: string]: DetailItem
  APPLICANT_MANAGEMENT: DetailItem
  MEMBER_MANAGEMENT: DetailItem
  APPLICANT_EVALUATION: DetailItem
  SCHEDULE: DetailItem
  CAREER_MANAGEMENT: DetailItem
}

export interface Plan {
  COST: Cost
  PLAN_EXPLAIN: PlanExplain
  DETAIL: Detail
}

export interface DetailItem {
  title: string
  details: string[]
}
