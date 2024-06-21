import { License } from '@/entities/Application/types/ApplicantRequest'
import { LicenseKeys } from '@/entities/Application/types'

export const LICENSE_DEFAULT_VALUE: License = {
  is_licence: true,
  name: '',
  level: '',
  issuing_authority: '',
  acquisition_date: null,
  qualification_number: '',
}

export const LICENSE_ITEM_KEYS: LicenseKeys[] = [
  'name',
  'level',
  'issuing_authority',
  'acquisition_date',
  'qualification_number',
]
