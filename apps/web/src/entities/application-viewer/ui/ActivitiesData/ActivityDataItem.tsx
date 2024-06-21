import * as Styles from '../styles'
import { Badge } from '@/shared/ui'
import { getDayFormat } from '@/shared/lib/utils'

interface ActivitiesDataItemProps {
  type: string
  name: string
  status: string
  startDate: string
  endDate?: string
  description: string
}

export const ActivityDataItem = ({
  type,
  name,
  status,
  startDate,
  endDate,
  description,
}: ActivitiesDataItemProps) => {
  const endStatus = status === '활동중' ? '현재' : endDate && getDayFormat(endDate, 'YY년 M월 D일')

  return (
    <Styles.Item>
      <Styles.Text>
        {name}
        <Badge text={type} type="gray" />
      </Styles.Text>
      <Styles.Detail>
        {getDayFormat(startDate, 'YY년 M월 D일')} ~ {endStatus}
      </Styles.Detail>
      <Styles.Description>{description}</Styles.Description>
    </Styles.Item>
  )
}
