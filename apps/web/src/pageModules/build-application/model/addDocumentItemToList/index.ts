import { APPLICANT_DOCUMENT_INFO } from '@/widgets/Application/constants'
import { FieldArray, UseFormWatch } from 'react-hook-form'
import { BuildApplicationForm } from '@/entities/build-application/types/buildApplicationForm'
import {
  RecruitApplicationItem,
  RecruitMultipleItem,
} from '@/entities/build-application/types/applicationItem'

export const addDocumentItemToList = (
  watch: UseFormWatch<BuildApplicationForm>,
  append: (value: RecruitApplicationItem) => void,
  update: (index: number, value: FieldArray<BuildApplicationForm, 'applicant_list'>) => void,
  key: string,
  listKey: 'documents' | 'questions',
  index: number,
) => {
  const applicantList = watch('applicant_list')
  const itemIndex = applicantList.findIndex((item: { key: string }) => item.key === key)
  const hasItem = itemIndex !== -1
  const item = applicantList[itemIndex]

  const addItem = hasItem ? item : { key, is_multiple: true }
  const documentItem: RecruitMultipleItem = {
    ...APPLICANT_DOCUMENT_INFO[index],
    title: '',
    note: '',
  }

  if (!hasItem) {
    const newItem = {
      ...addItem,
      [listKey]: [documentItem],
    } as RecruitApplicationItem

    return append(newItem)
  }

  const list = (): RecruitMultipleItem[] => {
    const fields = item?.[listKey]
    return fields ? [...fields, documentItem] : [documentItem]
  }

  const newItem = {
    ...item,
    [listKey]: list(),
  }

  return update(itemIndex, newItem)
}
