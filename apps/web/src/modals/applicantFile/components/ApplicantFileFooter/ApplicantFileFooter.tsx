import * as Styles from './styles'
import { Button } from '@/shared/ui'
import { useFormContext } from 'react-hook-form'
import { useTranslations } from 'next-intl'

interface ApplicantFileFooterProps {
  onClose: () => void
  textConfirm?: string
}

const ApplicantFileFooter = ({ onClose, textConfirm }: ApplicantFileFooterProps) => {
  const {
    formState: { isValid },
  } = useFormContext()
  const $t = useTranslations('common')
  return (
    <Styles.Wrapper>
      <Button
        onClick={onClose}
        width="fit-content"
        type="reset"
        size="sm"
        text={$t('cancel')}
        state="standard"
        style="mono"
      />
      <Button
        width="72px"
        type="submit"
        size="sm"
        text={!textConfirm ? $t('save') : textConfirm}
        disabled={!isValid}
      />
    </Styles.Wrapper>
  )
}

export default ApplicantFileFooter
