'use client'

import { IMAGES } from '@/shared/constants'
import CreateEmailForm from '../CreateEmailForm'
import Image from 'next/image'
import * as Styles from './styles'
import { useLocale, useTranslations } from 'next-intl'

const CreateEmailContent = () => {
  const $t = useTranslations()
  const currentLocale = useLocale()

  const getDesc = () => {
    if (currentLocale !== 'ko') {
      return (
        <Styles.Desc>
          This will be the email address used for communication with applicants within the
          workspace.
        </Styles.Desc>
      )
    }
    return (
      <Styles.Desc>
        워크스페이스 내에서 지원자와 연락을 주고받을
        <br />
        이메일 주소가 됩니다.
      </Styles.Desc>
    )
  }

  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Image src={IMAGES.MAIL_COMPLETE_BLUE} alt="" width={64} height={64} />
        <Styles.Title>{$t('stead_mail_setting.title')}</Styles.Title>
        {getDesc()}
        <CreateEmailForm />
      </Styles.Container>
    </Styles.Wrapper>
  )
}

export default CreateEmailContent
