import * as Styles from './styles'
import { Button } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface PreviewEvaluationTableFooterProps {
  onClose: () => void
}

const PreviewEvaluationTableFooter = ({ onClose }: PreviewEvaluationTableFooterProps) => {
  const $t = useTranslations('common')
  return (
    <Styles.Wrapper>
      <Button onClick={onClose} text={$t('confirm')} width="74px" />
    </Styles.Wrapper>
  )
}

export default PreviewEvaluationTableFooter
