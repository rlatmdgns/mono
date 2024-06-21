import * as Styles from './styles'
import { Button } from '@/shared/ui'
import { useFormContext } from 'react-hook-form'
import { useTranslations } from 'next-intl'

interface SelectEvaluationTableTemplateFooterProps {
  onClose: () => void
}

const SelectTemplateFooter = ({ onClose }: SelectEvaluationTableTemplateFooterProps) => {
  const $t = useTranslations('common')
  const {
    formState: { isValid },
  } = useFormContext()

  return (
    <Styles.Wrapper>
      <Button
        onClick={onClose}
        state="standard"
        style="mono"
        text={$t('cancel')}
        width="fit-content"
      />
      <Button disabled={!isValid} type="submit" text={$t('confirm')} width="74px" />
    </Styles.Wrapper>
  )
}

export default SelectTemplateFooter
