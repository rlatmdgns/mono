import * as Styles from '../styles'
import { Badge } from '@/shared/ui'
import { getDayFormat } from '@/shared/lib/utils'
import { DetailDivide } from '../DetailDivide'

interface LanguageDataItemProps {
  type: string
  category: string
  score: string
  level: string
  examDate: string
  qualificationNumber: string
}

export const LanguageDataItem = ({
  type,
  category,
  score,
  level,
  examDate,
  qualificationNumber,
}: LanguageDataItemProps) => {
  return (
    <Styles.Item>
      <Styles.Text>
        {type}
        <Badge text={category} type="gray" />
      </Styles.Text>
      <Styles.Detail>
        {getDayFormat(examDate, 'YY년 M월 D일')}
        <DetailDivide />
        {level || score}
        <DetailDivide />
        {qualificationNumber}
      </Styles.Detail>
    </Styles.Item>
  )
}
