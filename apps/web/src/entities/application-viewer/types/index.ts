import { ApplicationViewerItemForm } from './form'
import { ApplicationViewerItemDataType } from '@/entities/application-viewer/types/data'

export interface Personal {
  key: string
  name: string
  email: string
  phone: string
  state: number
  date: Date
  re_url: string | null
  profile: {
    data: string
    form: ApplicationViewerItemForm
  }
}

export interface ApplicationItemObject {
  name: string
  type?: 'file' | 'question'
  data: ApplicationViewerItemDataType
  form: ApplicationViewerItemForm
}

export * from './form'
export * from './data'
