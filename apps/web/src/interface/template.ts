export interface TemplateParams {
  template_type: string
  search?: string
}

export interface Template {
  template_id: number
  enterprise_id: number
  template_title: string
  created_user: TemplateUser
  updated_user: TemplateUser
  template_type: string
  created_at: string
  updated_at: string
  label: string
  value: string
}

export interface TemplateContentResponse {
  template_contents: any
  template_title?: string
  template_id: number
  enterprise_id: number
  template_type: number
  applicant_form_id?: number
  created_user?: TemplateUser
  updated_user?: TemplateUser
  created_at?: Date
  updated_at?: Date
}

export interface MailTemplateContent {
  mail_contents: string
  mail_subject: string
}

interface TemplateUser {
  identification: string
  user_name: string
  user_profile: string
}

export type HandleTemplateDelete = (id: number, title: string) => void
export type HandleTemplateIdSave = (id: number) => void
export type handleTemplateAdd = () => void
export type HandleTemplateCopy = (id: number) => void
