import * as Styles from './styles'
import { Button } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface EvaluationFooterProps {
  onClose: () => void
  isDirty: boolean
}

const EvaluationSettingFooter = ({ onClose, isDirty }: EvaluationFooterProps) => {
  const $t = useTranslations('common')
  return (
    <Styles.Wrapper>
      {!isDirty ? (
        <Styles.ButtonBox>
          <Button onClick={onClose} text={$t('cancel')} state="standard" style="mono" />
          <Button onClick={onClose} text={$t('confirm')} width="74px" />
        </Styles.ButtonBox>
      ) : (
        <Styles.ButtonBox>
          <Button onClick={onClose} text={$t('cancel')} state="standard" style="mono" />
          <Button disabled={!isDirty} type="submit" text={$t('save')} width="74px" />
        </Styles.ButtonBox>
      )}
    </Styles.Wrapper>
  )
}

export default EvaluationSettingFooter
