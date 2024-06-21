import * as Styles from './styles'
import { useTranslations } from 'next-intl'

const EssayQuestionTextBox = ({}) => {
  const $t = useTranslations()
  return (
    <Styles.Wrapper>
      <Styles.Text>{$t('evaluation.essay_question_text')}</Styles.Text>
      <Styles.Placeholder> ({$t('common.text_limit', { limit: 500 })})</Styles.Placeholder>
    </Styles.Wrapper>
  )
}

export default EssayQuestionTextBox
