import * as Styles from './styles'
import { ApplicationViewerItemDataType } from '../../types'
import { getTotalCareer, isCareer } from '../../lib'

interface TotalCareerProps {
  text: string
  data: ApplicationViewerItemDataType
}

export const TotalCareer = ({ text, data }: TotalCareerProps) => {
  if (text !== '경력 사항') return null
  if (!isCareer(data)) return null

  const total = getTotalCareer(data)
  return <Styles.Description>{total}</Styles.Description>
}
