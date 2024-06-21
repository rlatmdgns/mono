import React from 'react'
import { IconNames } from "@repo/ui/src/components/Icon";

export interface CreatePostingApplicantFormRequest {
  posting_applicant_form: PostingApplicantForm[]
  is_edited: boolean
  is_template: boolean
}

export interface PostingApplicantForm {
  [key: string]: PostingApplicantFormItem | null
}

export interface MultipleItem {
  is_canview: boolean
  is_deleted: boolean
  is_note: boolean
  is_required: boolean
  note?: string
  title: string
}

export interface PostingApplicantFormItem {
  is_required: boolean
  is_canview: boolean
  is_note?: boolean
  note?: string
  item_name?: string
  question_name?: string
  documents?: MultipleItem[]
  questions?: MultipleItem[]
  isBasic?: boolean
  is_title?: boolean
  is_question?: boolean
  is_multiple?: boolean
  objectKey?: string
  ko?: string
  en?: string
  placeholder?: string
  desc?: string
  icon?: IconNames
  Component?: React.ReactNode
  key?: string
}
