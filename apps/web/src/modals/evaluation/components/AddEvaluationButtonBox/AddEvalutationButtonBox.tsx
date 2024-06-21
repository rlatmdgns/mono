import * as Styles from './styles'
import { Button } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface AddEvaluationButtonBoxProps {
  isFocused?: boolean
  onAddMethod: () => void
  onAddSection: () => void
}

const AddEvaluationButtonBox = ({
  isFocused,
  onAddMethod,
  onAddSection,
}: AddEvaluationButtonBoxProps) => {
  const $t = useTranslations()
  if (!isFocused) return null
  return (
    <Styles.Wrapper>
      <Button
        onClick={onAddMethod}
        style="mono"
        iconSource="icon/plus-line"
        text={$t('evaluation.add_evaluation_item')}
        type="button"
      />
      <Button
        onClick={onAddSection}
        style="mono"
        iconSource="icon/equal-line"
        text={$t('common.add_section')}
        type="button"
      />
    </Styles.Wrapper>
  )
}

export default AddEvaluationButtonBox
