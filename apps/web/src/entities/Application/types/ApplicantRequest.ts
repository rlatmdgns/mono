export interface VeteranBenefit {
  is_veteran_benefit: boolean
  veteran_benefit_number?: string
}

export interface Disabled {
  is_disabled: boolean
  classification?: string
  level?: string
}

export interface Education {
  name?: string
  education_type: string
  classfication?: string
  is_transfer?: boolean
  is_night_school?: boolean
  major?: string
  minor?: string
  double_major?: string
  is_major?: boolean
  is_minor?: boolean
  line?: string
  minor_line?: string
  double_major_line?: string
  is_double_major?: boolean
  is_general_educational?: boolean
  passing_date?: Date
  period_enrollment?: string
  period_graduation?: string
  enrollment_date?: Date
  graduation_date?: Date
  grade?: number
  maximum_grade?: number
}

export interface Military {
  is_military: boolean
  type: string
  rank: string
  discharge: string
  enlistment_date: Date
  discharge_date: Date
}

export interface Career {
  experience_type: string
  company_name?: string
  start_date?: Date | null
  end_date?: Date | null
  working_status?: string
  employment_type?: string
  department?: string
  position?: string
  role?: string
}

export interface Activity {
  is_activity: boolean
  type?: string
  name?: string
  status?: string
  start_date?: Date | null
  end_date?: Date | null
  description?: string
}

export interface Language {
  is_language: boolean
  type?: string
  category?: string
  score?: string
  level?: string
  exam_date?: Date | null
  qualification_number?: string
}

export interface License {
  is_licence: boolean
  name?: string
  level?: string
  issuing_authority?: string
  acquisition_date?: Date | null
  qualification_number?: string
}

export interface Award {
  is_award: boolean
  description?: string
  organization?: string
  award_date?: Date | null
  detail_description?: string
}

export interface PreQuestion {
  description: string
  posting_applicant_form_pre_question_id: string
}

export interface Document {
  file_url: string
  posting_applicant_form_document_id: string
}

export interface ApplicantRequest {
  name: string
  email: string
  phone: string
  apply_route: string
  gender?: string
  birthday?: string
  profile_image?: string
  nationality?: string
  road_address?: string
  detail_address?: string
  resume?: string
  veteran_benefit?: VeteranBenefit
  disabled?: Disabled
  educations?: Education[]
  military?: Military
  careers?: Career[]
  activities?: Activity[]
  languages?: Language[]
  licenses?: License[]
  awards?: Award[]
  pre_questions?: PreQuestion[]
  documents?: Document[]
  enterprise_select_personal_terms: boolean
  enterprise_required_personal_terms: boolean
  is_directed: boolean
}
