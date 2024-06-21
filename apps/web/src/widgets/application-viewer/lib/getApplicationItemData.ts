import {
  ApplicationItemObject,
  ApplicationViewerItemForm,
  DocumentFile,
  Question,
} from '@/entities/application-viewer/types'
import { ApplicationInfo } from '@/entities/Application/types'
import { isArray } from '@daybrush/utils'

const EMPTY_FORM: ApplicationViewerItemForm = {
  key: '',
  id: 0,
  is_required: false,
  is_canview: false,
  is_delete: false,
  created_at: null,
  updated_at: null,
}

export const getApplicationItemData = (
  item: ApplicationInfo,
): ApplicationItemObject | ApplicationItemObject[] | null => {
  switch (item?.key) {
    case 'resume':
      if (isArray(item?.data) || isArray(item?.form)) return null
      return {
        name: item?.key,
        type: 'file',
        data: item?.data,
        form: item?.form,
      }
    case 'documents':
      if (!isArray(item?.form) || !isArray(item?.data)) return null
      if (item?.form.length < 1) return []

      const files = item?.data as DocumentFile[]
      return item?.form?.map((form: ApplicationViewerItemForm) => {
        const document = files.find((item: DocumentFile) => item?.title === form?.title)

        if (!document) return
        return {
          name: form.title || '',
          type: 'file',
          data: document || {
            file_url: '',
          },
          form: form,
        }
      }) as ApplicationItemObject[]
    case 'pre_questions':
      if (!isArray(item?.form) || !isArray(item?.data)) return null
      if (item?.data.length < 1) return []
      const questions = item?.data as Question[]
      return questions?.map((question: Question, index: number) => {
        return {
          name: (isArray(item?.form) && item?.form[index]?.title) || '',
          type: 'question',
          data: question,
          form: (isArray(item?.form) && item?.form[index]) || EMPTY_FORM,
        }
      })
    default:
      if (isArray(item?.form)) return null
      return {
        name: item?.key,
        data: item?.data,
        form: item?.form,
      }
  }
}
