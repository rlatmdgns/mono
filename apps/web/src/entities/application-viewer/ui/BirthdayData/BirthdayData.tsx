import { getDayFormat } from '@/shared/lib/utils'
import { TextData } from '../TextData'
import { ApplicationViewerItemDataType } from '../../types'

interface BirthdayDataProps {
  name: string
  data: ApplicationViewerItemDataType
}

export const BirthdayData = ({ name, data }: BirthdayDataProps) => {
  if (name !== 'birthday') return null

  if (!data) return null
  const date = getDayFormat(new Date(data as string), 'YY년 M월 D일')
  return <TextData data={date} />
}
