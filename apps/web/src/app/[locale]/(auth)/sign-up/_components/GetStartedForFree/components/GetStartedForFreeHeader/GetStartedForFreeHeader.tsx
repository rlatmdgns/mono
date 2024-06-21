import { IMAGES } from '@/shared/constants'
import * as Styles from './styles'
import DOMPurify from 'dompurify'
import { useTranslations } from 'next-intl'

const GetStartedForFreeHeader = () => {
  const $t = useTranslations('sign_up')
  return (
    <>
      <Styles.Logo src={IMAGES.LOGO_BLACK} alt="" width={123} height={40} />
      <Styles.Copy
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize($t('title')),
        }}
      ></Styles.Copy>
    </>
  )
}

export default GetStartedForFreeHeader
