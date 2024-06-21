'use client'

import { NextIntlClientProvider } from 'next-intl'
import translateLanguage from '@/shared/lang'

export default function CustomNextIntlClientProvider({ locale, timeZone, children }: any) {
  let messages

  if (!messages) {
    messages = translateLanguage[locale]
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
      {children}
    </NextIntlClientProvider>
  )
}
