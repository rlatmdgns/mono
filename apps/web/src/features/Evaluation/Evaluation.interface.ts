import React from 'react'
import { EvaluationAllMethodLabel } from '@/modals/evaluation/evaluation.interface'
import { ApplicantEvaluationTable } from '@/services/evaluation/getApplicantEvaluationTables/getApplicantEvaluationTables.interface'

export type EvaluationViewState =
  | 'main'
  | 'summary'
  | 'submitForm'
  | 'updateMyForm'
  | 'my_result'
  | 'member_result'
  | 'member_result_list'

export type EvaluationTableCloseHandler = (
  isClosed: boolean,
  evaluationId?: string,
  tableId?: string,
) => void

export interface EvaluationTableForm {
  table_id: number
  evaluation_v2_id: number
  table_title: string
  is_deleted?: number
  evaluation_sections: EvaluationTableSection[]
}

export interface EvaluationTableSection {
  section_id?: number
  section_title: string
  section_description?: string
  order?: number
  evaluation_items: EvaluationTableArticle[]
}

export interface EvaluationTableArticle {
  item_id: number
  item_title: string
  item_type: EvaluationAllMethodLabel
  item_score?: number
  comment?: string
  item_subjective?: string
  is_required_comment?: boolean
  order?: number
}

export interface EvaluationSelectOption {
  label: string
  value: string
}

export interface EvaluationTableStatusItem {
  [key: string]: {
    icon: React.JSX.Element
    bgColor: string
  }
}

export interface EvaluationTableList {
  [key: string]: ApplicantEvaluationTable[]
}

export interface EvaluationIds {
  evaluationId: string
  tableId: string
}

export interface EvaluationMemberResult {
  identifications: string[]
  selectedIdentification: string
}
