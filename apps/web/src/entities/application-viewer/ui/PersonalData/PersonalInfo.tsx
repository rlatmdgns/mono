import * as Styles from './styles'
import { getDayFormat, getDaysAgo } from '@/shared/lib/utils'
import { EmailPhoneData } from './EmailPhoneData'

interface PersonalInfoProps {
  email: string
  phone: string
  date: Date
  reUrl: string | null
  isCanView: boolean
}

export const PersonalInfo = ({ email, phone, date, reUrl, isCanView }: PersonalInfoProps) => {
  return (
    <Styles.List>
      <EmailPhoneData email={email} phone={phone} isCanView={isCanView} />
      <Styles.Item>
        <Styles.ItemLabel>지원 경로</Styles.ItemLabel>
        <Styles.ItemValue>{reUrl}</Styles.ItemValue>
      </Styles.Item>
      <Styles.Item>
        <Styles.ItemLabel>접수일</Styles.ItemLabel>
        <Styles.ItemValue>
          {getDayFormat(date, 'YY년 M월 D일')} ({getDaysAgo(date)}일 전)
        </Styles.ItemValue>
      </Styles.Item>
    </Styles.List>
  )
}
