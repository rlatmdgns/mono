import { RecruitMultipleItem } from '@/entities/build-application/types/applicationItem'

interface ListProps {
  list: RecruitMultipleItem[]
  value: string | boolean
  updateKey: string
  selectedDocumentIndex: number | null
}

export const mapAndUpdateDocumentList = ({
  list,
  selectedDocumentIndex,
  value,
  updateKey,
}: ListProps) => {
  return [
    ...list?.map((item, item_index: number) => {
      if (selectedDocumentIndex === item_index) {
        return { ...item, [updateKey]: value }
      }
      return item
    }),
  ]
}
