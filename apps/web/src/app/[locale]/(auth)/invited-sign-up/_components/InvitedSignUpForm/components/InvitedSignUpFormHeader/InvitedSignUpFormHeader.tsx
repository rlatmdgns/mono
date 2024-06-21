import { IMAGES } from '@/shared/constants'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

const InvitedSignUpFormHeader = () => {
  const $t = useTranslations('common')

  return (
    <>
      <Styles.Logo src={IMAGES.LOGO_BLACK} alt="logo" width={77} height={25} />
      <Styles.Title>
        <Styles.TitleBold>{$t('sign_up')}</Styles.TitleBold>
      </Styles.Title>
    </>
  )
}

export default InvitedSignUpFormHeader
