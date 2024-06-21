import {
  Activity,
  Address,
  ApplicationViewerItemDataType,
  Award,
  Career,
  Disabled,
  DocumentFile,
  Education,
  Language,
  License,
  Military,
  Personal,
  Question,
  VeteranBenefit,
} from '../types'

const isArrayType = <T>(data: any, prop: keyof T): data is T[] => {
  return (data as T[])[0]?.[prop] !== undefined
}

const isObjectType = <T>(data: any, prop: keyof T): data is T => {
  return (data as T)?.[prop] !== undefined
}

export const isCareer = (career: ApplicationViewerItemDataType): career is Career[] => {
  return isArrayType<Career>(career, 'experience_type')
}

export const isEducation = (education: ApplicationViewerItemDataType): education is Education[] => {
  return isArrayType<Education>(education, 'education_type')
}

export const isActivity = (activity: ApplicationViewerItemDataType): activity is Activity[] => {
  return isArrayType<Activity>(activity, 'is_activity')
}

export const isPersonal = (data: ApplicationViewerItemDataType): data is Personal => {
  return isObjectType<Personal>(data, 'name')
}

export const isAddress = (data: ApplicationViewerItemDataType): data is Address => {
  return isObjectType<Address>(data, 'road_address')
}

export const isAward = (data: ApplicationViewerItemDataType): data is Award[] => {
  return isArrayType<Award>(data, 'is_award')
}

export const isLicense = (data: ApplicationViewerItemDataType): data is License[] => {
  return isArrayType<License>(data, 'is_licence')
}

export const isLanguage = (data: ApplicationViewerItemDataType): data is Language[] => {
  return isArrayType<Language>(data, 'is_language')
}

export const isMilitary = (data: ApplicationViewerItemDataType): data is Military => {
  return isObjectType<Military>(data, 'is_military')
}

export const isDisabled = (data: ApplicationViewerItemDataType): data is Disabled => {
  return isObjectType<Disabled>(data, 'is_disabled')
}

export const isVeteranBenefit = (data: ApplicationViewerItemDataType): data is VeteranBenefit => {
  return isObjectType<VeteranBenefit>(data, 'is_veteran_benefit')
}

export const isDocument = (data: ApplicationViewerItemDataType): data is DocumentFile => {
  return isObjectType<DocumentFile>(data, 'file_url')
}

export const isQuestion = (data: ApplicationViewerItemDataType): data is Question => {
  return isObjectType<Question>(data, 'description')
}
