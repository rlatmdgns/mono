import { IconNames } from "@repo/ui/src/components/Icon";

export interface BasicApplicationItem {
  ko: string
  en: string
  placeholder?: string
  key: string
  errorMessage?: string
  is_required: boolean
  is_canview: boolean
  isBasic?: boolean
  note?: string
}

export interface RecruitMultipleItem {
  created_at?: string | null
  id?: number
  is_canview: boolean
  is_deleted?: boolean
  is_note?: boolean
  is_required: boolean
  is_question?: boolean
  note?: string
  title: string
  updated_at?: string | null
}

export interface RecruitApplicationItem extends BasicApplicationItem {
  icon?: IconNames
  is_note?: boolean
  isRequired?: boolean
  description?: string
  documents?: RecruitMultipleItem[]
  questions?: RecruitMultipleItem[]
}
