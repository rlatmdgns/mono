import * as Styles from './styles'
import { Button } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface WaitingRequestMemberFooterProps {
  onClose: () => void
}

const WaitingRequestMemberFooter = ({ onClose }: WaitingRequestMemberFooterProps) => {
  const $t = useTranslations('common')
  return (
    <Styles.Footer>
      <Button text={$t('confirm')} onClick={onClose} />
    </Styles.Footer>
  )
}
export default WaitingRequestMemberFooter
