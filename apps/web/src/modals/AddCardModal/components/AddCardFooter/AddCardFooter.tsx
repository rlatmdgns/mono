import * as Styles from './styles'
import { Button } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface AddCardFooterProps {
  submitType: string
  disabled: boolean
  handleSubmit: () => void
  onClose: () => void
}

const AddCardFooter = ({ submitType, handleSubmit, disabled, onClose }: AddCardFooterProps) => {
  const $t = useTranslations('common')
  return (
    <Styles.AddCardFooter>
      <Button text={$t('cancel')} style="mono" state="standard" onClick={onClose} />
      <Button
        text={submitType === 'add' ? $t('register_action') : $t('modify_action')}
        disabled={disabled}
        onClick={handleSubmit}
      />
    </Styles.AddCardFooter>
  )
}
export default AddCardFooter
