import {
  ApplicationViewerItemDataType,
  ApplicationViewerItemForm,
  Personal,
} from '@/entities/application-viewer/types'

export interface ApplicationInfo {
  key: string
  form: ApplicationViewerItemForm | ApplicationViewerItemForm[]
  data: ApplicationViewerItemDataType
}

export type ApplicationResponse = [Personal, ...ApplicationInfo[]]
