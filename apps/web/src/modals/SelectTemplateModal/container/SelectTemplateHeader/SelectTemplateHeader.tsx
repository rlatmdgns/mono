import * as Styles from './styles'
import { useTranslations } from 'next-intl'

const SelectTemplateHeader = () => {
  const $t = useTranslations('common')
  return (
    <Styles.Wrapper>
      <Styles.Title>{$t('load_template')}</Styles.Title>
    </Styles.Wrapper>
  )
}

export default SelectTemplateHeader
