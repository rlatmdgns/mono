import { Personal } from './index'

export interface ApplicationViewerItemDefaultData {
  id: number
  created_at: string
  updated_at: string | null
}

export interface Activity extends ApplicationViewerItemDefaultData {
  type: string
  name: string
  status: string
  start_date: string
  end_date?: string
  description: string
  is_activity: boolean
}

export interface Address {
  road_address: string
  detail_address: string
}

export interface Award extends ApplicationViewerItemDefaultData {
  description: string
  organization: string
  award_date: Date
  detail_description?: string
  is_award: boolean
}

export interface Career extends ApplicationViewerItemDefaultData {
  experience_type: string
  company_name: string
  start_date: string
  end_date?: string
  working_status: string
  employment_type: string
  department: string
  position: string
  role?: string
}

export interface Disabled extends ApplicationViewerItemDefaultData {
  is_disabled: boolean
  classification: string
  level: string
}

export interface DocumentFile {
  file_id: number
  file_name: string
  file_url: string
  file_type: number
  is_public: boolean
  title: string
  is_submitted?: boolean
  is_deleted?: boolean
}

export interface Education extends ApplicationViewerItemDefaultData {
  name: string
  classfication?: string
  is_transfer: boolean
  is_night_school: boolean
  major: string
  minor: string
  double_major: string
  is_minor: boolean
  is_double_major: boolean
  period_enrollment: string | null
  period_graduation: string
  enrollment_date: Date
  graduation_date: Date
  grade: string
  maximum_grade: string
  passing_date: Date | null
  is_general_educational: boolean
  education_type?: string
}

export interface Language extends ApplicationViewerItemDefaultData {
  type: string
  category: string
  score: string
  level: string
  exam_date: string
  qualification_number: string
  is_language: boolean
}

export interface License extends ApplicationViewerItemDefaultData {
  name: string
  level: string
  issuing_authority: string
  acquisition_date: string
  qualification_number: string
  is_licence: boolean
}

export interface Military extends ApplicationViewerItemDefaultData {
  military_type: string
  military_rank: string
  discharge: string
  enlistment_date: string
  discharge_date?: string
  is_military: boolean
}

export interface Question extends ApplicationViewerItemDefaultData {
  description: string
}

export interface VeteranBenefit extends ApplicationViewerItemDefaultData {
  is_veteran_benefit: boolean
  veteran_benefit_number: string
}

export type ApplicationViewerItemDataType =
  | string
  | Date
  | Personal
  | Activity[]
  | Address
  | Award[]
  | Career[]
  | Disabled
  | DocumentFile
  | DocumentFile[]
  | Education[]
  | Language[]
  | License[]
  | Question
  | Question[]
  | Military
  | VeteranBenefit
