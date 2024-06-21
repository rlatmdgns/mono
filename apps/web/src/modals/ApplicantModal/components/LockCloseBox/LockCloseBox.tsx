import * as Styles from './styles'
import { IconBoxButton, IconButton, Tooltip } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface LockCloseBoxProps {
  isEvaluator: boolean
  isPublic: boolean
  onClose: () => void
  onPublic: () => void
}

const LockCloseBox = ({ isPublic, onClose, isEvaluator, onPublic }: LockCloseBoxProps) => {
  const $t = useTranslations('common')
  const iconSource = isPublic ? 'icon/unlock-solid' : 'icon/lock-solid'
  const tooltipText = isPublic ? $t('all_access') : $t('admin_recruitment_member_access')

  return (
    <Styles.Wrapper>
      {!isEvaluator && (
        <Tooltip text={tooltipText} direction="bottom">
          <IconBoxButton onClick={onPublic} icon={iconSource} size="xs" state="standard" />
        </Tooltip>
      )}
      <IconButton onClick={onClose} icon="icon/cancle-line1" />
    </Styles.Wrapper>
  )
}

export default LockCloseBox
