import { RegisterOptions } from 'react-hook-form'

export interface ApplicantInfoField {
  title: string
  placeholder: string
  register: string
  type: 'text' | 'email' | 'tel' | 'password'
  options?: RegisterOptions
}
