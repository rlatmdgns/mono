import * as Styles from '../styles'
import { Badge } from '@/shared/ui'
import { getDayFormat } from '@/shared/lib/utils'
import { DetailDivide } from '../DetailDivide'

interface CareerDataItemProps {
  companyName: string
  startDate: string
  endDate?: string
  workingStatus: string
  employmentType: string
  department: string
  position: string
  role?: string
}

export const CareerDataItem = ({
  companyName,
  startDate,
  endDate,
  workingStatus,
  employmentType,
  department,
  position,
  role,
}: CareerDataItemProps) => {
  const badgeType = employmentType === '정규직' ? 'standard' : 'gray'
  const endStatus =
    workingStatus === '재직 중' ? '현재' : endDate && getDayFormat(endDate, 'YY년 M월 D일')

  return (
    <Styles.Item>
      <Styles.Text>
        {companyName}
        <Badge text={employmentType} type={badgeType} />
      </Styles.Text>
      <Styles.Detail>
        {getDayFormat(startDate, 'YY년 M월 D일')} ~ {endStatus}
      </Styles.Detail>
      <Styles.Detail>
        {department}
        <DetailDivide />
        {position}
      </Styles.Detail>
      {role && <Styles.Description>{role}</Styles.Description>}
    </Styles.Item>
  )
}
