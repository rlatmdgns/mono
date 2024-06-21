import { TextData } from '../TextData'
import { ApplicationViewerItemDataType } from '../../types'

interface GenderDataProps {
  name: string
  data: ApplicationViewerItemDataType
}

export const GenderData = ({ name, data }: GenderDataProps) => {
  if (name !== 'gender') return null
  if (typeof data !== 'string') return null
  return <TextData data={data} />
}
