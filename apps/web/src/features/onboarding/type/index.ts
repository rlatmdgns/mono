import { FinalStageApplicant } from '@/entities/onboarding/types'

export type SequenceAuthority = 'all' | 'manager' | 'freshman'

export interface AddSequenceDay {
  date_type?: string
  join_date: number
}

export interface AddSequenceValue extends AddSequenceDay {
  authority: SequenceAuthority
  d_day: number
}

export interface ModifySequenceValue extends AddSequenceValue {
  modify_d_day_date: string
}

export interface CreateFreshManRequest {
  freshmen: FinalStageApplicant[]
}

export type HandleAddSequence = (value: AddSequenceValue) => void
export type HandleDeleteSequence = (index: number, type: 'freshman' | 'manager') => void
export type HandleUpdateSequence = (
  index: number,
  type: 'freshman' | 'manager',
  d_day: number,
) => void

export interface SequenceOption {
  label: string | React.ReactNode
  value: string | number
}
