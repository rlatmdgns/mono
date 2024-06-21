import * as Styles from './styles'
import { Button } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface EvaluationUserFooterProps {
  onClose: () => void
  isDirty?: boolean
}

const UpdateEvaluationMemberFooter = ({ onClose, isDirty }: EvaluationUserFooterProps) => {
  const $t = useTranslations('common')
  return (
    <Styles.Wrapper>
      {isDirty ? (
        <>
          <Button
            onClick={onClose}
            width="auto"
            text={$t('cancel')}
            state="standard"
            style="mono"
          />
          <Button type="submit" width="74px" text={$t('save')} />
        </>
      ) : (
        <Button onClick={onClose} width="74px" text={$t('confirm')} />
      )}
    </Styles.Wrapper>
  )
}

export default UpdateEvaluationMemberFooter
