import { IMAGES } from '@/shared/constants'
import Image from 'next/image'
import * as Styles from './styles'
import { useLocale, useTranslations } from 'next-intl'

const SignUpFormHeader = () => {
  const $t = useTranslations('sign_up')
  const currentLocale = useLocale()
  return (
    <>
      <Image src={IMAGES.LOGO_BLACK} alt="" width={77} height={25} />
      <Styles.Title>
        <Styles.TitleBold>{$t('signup_header')}</Styles.TitleBold>
        {currentLocale === 'ko' ? '을' : ''}
        <br />
        {$t('start')}
      </Styles.Title>
    </>
  )
}

export default SignUpFormHeader
