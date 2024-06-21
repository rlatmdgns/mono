import * as Styles from './styles'
import ChangePasswordTitle from '@/app/[locale]/(auth)/_components/ChangePasswordTitle'
import { IMAGES } from '@/shared/constants'
import { useTranslations } from 'next-intl'

const ChangePasswordSuccess = () => {
  const $t = useTranslations('messages')
  return (
    <Styles.SuccessContainer>
      <ChangePasswordTitle
        title={$t('password_change_complete')}
        icon={IMAGES.CHECK_CIRCLE_LINEAR}
      />
    </Styles.SuccessContainer>
  )
}
export default ChangePasswordSuccess
