import * as Styles from '../styles'
import { EmptyData } from '../EmptyData'
import { ApplicationViewerItemDataType } from '../../types'
import { isLanguage } from '../../lib'
import { LanguageDataItem } from './LanguageDataItem'

interface LanguagesDataProps {
  name: string
  data: ApplicationViewerItemDataType
}

export const LanguagesData = ({ name, data }: LanguagesDataProps) => {
  if (name !== 'languages') return null
  if (!isLanguage(data)) return null

  const isEmpty = !data[0]?.is_language
  if (isEmpty) {
    return <EmptyData text="없음" />
  }
  return (
    <Styles.List>
      {data.map((item, index) => (
        <LanguageDataItem
          key={`applicant_language_${index}`}
          type={item.type}
          category={item.category}
          score={item.score}
          level={item.level}
          examDate={item.exam_date}
          qualificationNumber={item.qualification_number}
        />
      ))}
    </Styles.List>
  )
}
