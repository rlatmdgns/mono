import * as Styles from '../styles'
import { getDayFormat } from '@/shared/lib/utils'
import { DetailDivide } from '../DetailDivide'

interface AwardDataItemProps {
  description: string
  organization: string
  awardDate: Date
  detailDescription?: string
}

export const AwardDataItem = ({
  description,
  organization,
  awardDate,
  detailDescription,
}: AwardDataItemProps) => {
  return (
    <Styles.Item>
      <Styles.Text>{description}</Styles.Text>
      <Styles.Detail>
        {getDayFormat(awardDate, 'YY년 M월 D일')}
        <DetailDivide />
        {organization}
      </Styles.Detail>
      {detailDescription && <Styles.Description>{detailDescription}</Styles.Description>}
    </Styles.Item>
  )
}
