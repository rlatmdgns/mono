'use client'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

const TermsOfServiceContent = ({ children }: { children?: React.ReactNode }) => {
  const $t = useTranslations('page')

  return (
    <Styles.Wrapper>
      <Styles.Title>{$t('terms_of_service')}</Styles.Title>
      {children}
    </Styles.Wrapper>
  )
}

export default TermsOfServiceContent
