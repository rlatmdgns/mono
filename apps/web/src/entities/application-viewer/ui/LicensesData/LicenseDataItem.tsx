import * as Styles from '../styles'
import { Badge } from '@/shared/ui'
import { getDayFormat } from '@/shared/lib/utils'
import { DetailDivide } from '../DetailDivide'

interface LicenseDataItemProps {
  name: string
  level: string
  issuingAuthority: string
  acquisitionDate: string
  qualificationNumber: string
}

export const LicenseDataItem = ({
  name,
  level,
  issuingAuthority,
  acquisitionDate,
  qualificationNumber,
}: LicenseDataItemProps) => {
  return (
    <Styles.Item>
      <Styles.Text>
        {name}
        <Badge text={level} type="gray" />
      </Styles.Text>
      <Styles.Detail>
        {getDayFormat(acquisitionDate, 'YY년 M월 D일')}
        <DetailDivide />
        {issuingAuthority}
        <DetailDivide />
        {qualificationNumber}
      </Styles.Detail>
    </Styles.Item>
  )
}
