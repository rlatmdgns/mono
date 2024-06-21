import { TextData } from '../TextData'
import { ApplicationViewerItemDataType } from '../../types'

interface NationalityDataProps {
  name: string
  data: ApplicationViewerItemDataType
}

export const NationalityData = ({ name, data }: NationalityDataProps) => {
  if (name !== 'nationality') return null
  if (typeof data !== 'string') return null
  return <TextData data={data} />
}
