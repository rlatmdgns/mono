'use client'

import Link from 'next/link'
import * as Styles from './styles'
import { useLocale, useTranslations } from 'next-intl'

const PrivacyPolicyContent = ({ children }: { children?: React.ReactNode }) => {
  const $t = useTranslations('page')
  const currentLocale = useLocale()
  const getArticleText = () => {
    if (currentLocale !== 'ko') {
      return (
        <div>
          The use of "STEAD" and transferring information obtained from Google API to another app is
          subject to restricted usage requirements, including compliance with the{' '}
          <Link
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target={'_blank'}
          >
            Google API Services User Data Policy
          </Link>
          .
        </div>
      )
    }
    return (
      <div>
        "STEAD"의 사용 및 Google API에서 받은 정보를 다른 앱으로 전송하는 것은 제한 사용 요구사항을
        포함하여{' '}
        <Link
          href="https://developers.google.com/terms/api-services-user-data-policy"
          target={'_blank'}
        >
          Google API 서비스 사용자 데이터 정책
        </Link>
        을 준수합니다.
      </div>
    )
  }

  return (
    <Styles.Wrapper>
      <Styles.Title>{$t('privacy_policy')}</Styles.Title>
      {children}
      <Styles.Article>{getArticleText()}</Styles.Article>
    </Styles.Wrapper>
  )
}

export default PrivacyPolicyContent
