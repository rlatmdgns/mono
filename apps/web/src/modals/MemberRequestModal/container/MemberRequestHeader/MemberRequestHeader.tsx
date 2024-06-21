import { IconButton } from '@/shared/ui'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface MemberRequestHeaderProps {
  onClose: () => void
}

const MemberRequestHeader = ({ onClose }: MemberRequestHeaderProps) => {
  const $t = useTranslations('setting.member_setting')
  return (
    <Styles.Header>
      <Styles.Title>{$t('request_individual_member')}</Styles.Title>
      <IconButton icon="icon/cancle-line1" onClick={onClose} />
    </Styles.Header>
  )
}

export default MemberRequestHeader
