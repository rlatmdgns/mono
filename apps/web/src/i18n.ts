import { getRequestConfig } from 'next-intl/server'
import { locales } from './i18nConfig'
import notFound from '@/features/NotFound'

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: !locale
      ? await import(`@/shared/lang/ko.json`)
      : await import(`@/shared/lang/${locale}.json`),
    timeZone: 'Asia/Seoul',
  }
})
