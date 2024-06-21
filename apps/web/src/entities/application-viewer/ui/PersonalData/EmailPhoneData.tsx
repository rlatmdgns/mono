import * as Styles from './styles'
import { Tooltip } from '@/shared/ui'

interface EmailPhoneDataProps {
  email: string
  phone: string
  isCanView: boolean
}

export const EmailPhoneData = ({ email, phone, isCanView }: EmailPhoneDataProps) => {
  if (!isCanView) return null
  return (
    <>
      <Tooltip text="평가 담당자는 열람 권한이 없습니다." direction="left">
        <Styles.Item>
          <Styles.ItemLabel>이메일 (비공개)</Styles.ItemLabel>
          <Styles.ItemValue>{email}</Styles.ItemValue>
        </Styles.Item>
      </Tooltip>
      <Tooltip text="평가 담당자는 열람 권한이 없습니다." direction="left">
        <Styles.Item>
          <Styles.ItemLabel>연락처 (비공개)</Styles.ItemLabel>
          <Styles.ItemValue>{phone}</Styles.ItemValue>
        </Styles.Item>
      </Tooltip>
    </>
  )
}
