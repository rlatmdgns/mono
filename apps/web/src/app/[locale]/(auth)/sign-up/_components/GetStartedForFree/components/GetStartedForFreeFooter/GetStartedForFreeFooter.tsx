import { PAGE } from '@/shared/constants'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

const GetStartedForFreeFooter = () => {
  const $t = useTranslations()
  return (
    <Styles.Footer>
      <Styles.Text>{$t('sign_up.already_account')}</Styles.Text>
      <Styles.LinkToSignIn href={PAGE.SIGN_IN}>{$t('login.login')}</Styles.LinkToSignIn>
    </Styles.Footer>
  )
}

export default GetStartedForFreeFooter
