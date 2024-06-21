import * as Styles from '../styles'
import { Badge } from '@/shared/ui'
import { getDayFormat } from '@/shared/lib/utils'
import { EmptyData } from '../EmptyData'
import { getMilitaryDischargeState, isMilitary } from '../../lib'
import { ApplicationViewerItemDataType } from '../../types'

interface MilitaryDataProps {
  name: string
  data: ApplicationViewerItemDataType
}

export const MilitaryData = ({ name, data }: MilitaryDataProps) => {
  if (name !== 'military') return null
  if (!isMilitary(data)) return null

  if (!data.is_military) {
    return <EmptyData text="비대상" />
  }
  const discharge = getMilitaryDischargeState(data.discharge)
  return (
    <Styles.Content>
      <Styles.Text>
        {data.military_type}
        <Badge text={discharge.text} type={discharge.type} />
      </Styles.Text>
      <Styles.Detail>
        {getDayFormat(data.enlistment_date, 'YY년 M월 D일')} ~{' '}
        {data.discharge === '복무중'
          ? '현재'
          : data.discharge_date && getDayFormat(data.discharge_date, 'YY년 M월 D일')}
      </Styles.Detail>
      <Styles.Detail>{data.military_rank}</Styles.Detail>
    </Styles.Content>
  )
}
