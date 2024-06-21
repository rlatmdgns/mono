'use client'

import TermsOfServiceContent from '@/app/[locale]/terms-of-service/_components/TermsOfServiceContent'
import Terms20220306_ko from '@/app/[locale]/terms-of-service/20220306/_components/terms_20220306_ko'
import Terms20220306_en from '@/app/[locale]/terms-of-service/20220306/_components/terms_20220306_en'
import { useLocale } from 'next-intl'

export default function TermsOfService20220306Page() {
  const currentLocale = useLocale()

  return (
    <TermsOfServiceContent>
      <Terms20220306_ko lang={currentLocale} />
      <Terms20220306_en lang={currentLocale} />
    </TermsOfServiceContent>
  )
}
