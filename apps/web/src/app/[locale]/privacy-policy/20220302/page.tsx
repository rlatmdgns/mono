'use client'
import { useLocale } from 'next-intl'

import PrivacyPolicyContent from '../_components'
import Policy20220302_ko from '@/app/[locale]/privacy-policy/20220302/_components/policy_20220302_ko'
import Policy20220302_en from '@/app/[locale]/privacy-policy/20220302/_components/policy_20220302_en'

export default function PrivacyPolicy20220302Page() {
  const currentLocale = useLocale()

  return (
    <PrivacyPolicyContent>
      <Policy20220302_ko lang={currentLocale} />
      <Policy20220302_en lang={currentLocale} />
    </PrivacyPolicyContent>
  )
}
