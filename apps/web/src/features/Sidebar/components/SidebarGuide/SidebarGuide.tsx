import * as Styles from './styles'
import { Icon } from '@repo/ui'
import { useTranslations } from 'next-intl'

const SidebarGuide = () => {
  const $t = useTranslations('sidebar')
  return (
    <Styles.Wrapper>
      <Styles.Button href="https://stead-guide.readme.io/docs" target="_blank" prefetch={false}>
        <Icon icon="icon/question-solid" color="neutralGray500" />
        {$t('help')}
      </Styles.Button>
    </Styles.Wrapper>
  )
}

export default SidebarGuide
