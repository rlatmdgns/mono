'use client'

import TermsOfServiceContent from '@/app/[locale]/terms-of-service/_components/TermsOfServiceContent'
import Terms_20230714_ko from '@/app/[locale]/terms-of-service/20230714/_components/terms_20230714_ko'
import Terms_20230714_en from '@/app/[locale]/terms-of-service/20230714/_components/terms_20230714_en'
import { useLocale } from 'next-intl'

export default function TermsOfService20230714Page() {
  const currentLocale = useLocale()

  return (
    <TermsOfServiceContent>
      <Terms_20230714_ko lang={currentLocale} />
      <Terms_20230714_en lang={currentLocale} />
    </TermsOfServiceContent>
  )
}
