import { Control } from 'react-hook-form'

export interface Freshman {
  name: string
  posting_title: string
  posting_id: number
  pass_date: string
  employment_date: string
  id: number
  email: string
  phone: string
  scenarios: FreshMenScenario[]
}

export interface freshmanData {
  id: number
  scenarios?: FreshMenScenario[]
}

export interface FreshMenScenario {
  title: string
  is_changed?: boolean
}

export type FreshMenControl = Control<{ freshmen: freshmanData[] }>

export interface FreshMenResponse {
  freshman: Freshman[]
  total: number
  page: number
  last_page: number
  limit: number
}

export interface UpdateFreshManRequest {
  name: string
  email: string
  phone: string
  pass_date: string
  employment_date: string
}

export interface ScenarioWithFreshmenResponse extends UpdateFreshManRequest {
  id: number
  enterprise_id: number
  posting_id: number
  posting_title?: string
  type: 'ATS' | 'OMS'
  created_at: string
  updated_at: string
  is_checked: boolean
  is_disabled: boolean
}

export interface ScenarioWithFreshmenForm extends ScenarioWithFreshmenResponse {
  freshmanId: number
}

export type ApplyScenarioForFreshmenRequest = {
  freshmans: ApplyScenarioForFreshmenRequestItem[]
}

type ApplyScenarioForFreshmenRequestItem = {
  id: number
  is_checked: boolean
}

export interface CreateFreshManRequest extends UpdateFreshManRequest {
  posting_id: number
}

export interface DeleteFreshMenRequest {
  freshman_ids: number[]
}
