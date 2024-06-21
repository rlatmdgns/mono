import * as Styles from './styles'
import { Button } from '@/shared/ui'
import { useFormContext } from 'react-hook-form'
import { useTranslations } from 'next-intl'

interface EvaluationTableClosingStatusFooterProps {
  onClose: () => void
}

const EvaluationTableClosingStatusFooter = ({
  onClose,
}: EvaluationTableClosingStatusFooterProps) => {
  const $t = useTranslations('common')
  const {
    formState: { isDirty },
  } = useFormContext()

  return (
    <Styles.Wrapper>
      <Button
        onClick={onClose}
        text={$t('close')}
        state="standard"
        style="mono"
        width="fit-content"
      />
      <Button disabled={!isDirty} type="submit" text={$t('save')} width="74px" />
    </Styles.Wrapper>
  )
}

export default EvaluationTableClosingStatusFooter
