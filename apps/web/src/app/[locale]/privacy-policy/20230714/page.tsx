'use client'

import PrivacyPolicyContent from '../_components'
import Policy20230714_ko from '@/app/[locale]/privacy-policy/20230714/_components/policy_20230714_ko'
import Policy20230714_en from '@/app/[locale]/privacy-policy/20230714/_components/policy_20230714_en'
import { useLocale } from 'next-intl'

export default function PrivacyPolicy20230714Page() {
  const currentLocale = useLocale()
  return (
    <PrivacyPolicyContent>
      <Policy20230714_ko lang={currentLocale} />
      <Policy20230714_en lang={currentLocale} />
    </PrivacyPolicyContent>
  )
}
