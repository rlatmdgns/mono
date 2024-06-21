import * as Styles from './styles'
import { ApplicationViewerItemDataType } from '../../types'
import { isEducation } from '../../lib'

interface HighestEducationLevelProps {
  text: string
  data: ApplicationViewerItemDataType
}

export const HighestEducationLevel = ({ text, data }: HighestEducationLevelProps) => {
  if (text !== '학력') return null
  if (!isEducation(data)) return null

  const isHighSchool = data[0]?.education_type === 'highschool'
  const highestLevel = isHighSchool ? '고등학교' : data[0]?.classfication

  if (!highestLevel) return null
  return <Styles.Description>최종학력 - {highestLevel}</Styles.Description>
}
