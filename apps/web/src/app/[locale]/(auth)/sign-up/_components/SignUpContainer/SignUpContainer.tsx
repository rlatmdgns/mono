'use client'

import SignUpContent from '../SignUpContent'
import SignUpImage from '../SignUpImage'
import * as Styles from './styles'
import { LinkButton } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const SignUpContainer = () => {
  const $t = useTranslations('common')
  return (
    <Styles.Wrapper>
      <Styles.HomeLinkBox>
        <LinkButton
          href="https://www.steadhr.com"
          iconSource="icon/left-line"
          text={$t('go_home')}
          state="standard"
          style="mono"
        />
      </Styles.HomeLinkBox>
      <Styles.Container>
        <SignUpContent />
        <SignUpImage />
      </Styles.Container>
    </Styles.Wrapper>
  )
}

export default SignUpContainer
