import { IconButton } from '@/shared/ui'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface MemberBatchRequestHeaderProps {
  onClose: () => void
}

const MemberBatchRequestHeader = ({ onClose }: MemberBatchRequestHeaderProps) => {
  const $t = useTranslations('setting.member_setting')

  return (
    <Styles.Header>
      <Styles.Title>{$t('request_batch_member')}</Styles.Title>
      <IconButton icon="icon/cancle-line1" onClick={onClose} />
    </Styles.Header>
  )
}

export default MemberBatchRequestHeader
