import type { MetadataRoute } from 'next'
import { PAGE } from '@/shared/constants'
import { getServerRecruitUrl } from '@/entities/recruit/api/getServerRecruitUrl'

const defaultLocale = 'ko' as const
const locales = ['en', 'ko'] as const
const host = process.env.NEXT_PUBLIC_ORIGIN

const pathNames = [
  PAGE.TEAMS,
  PAGE.SIGN_IN,
  PAGE.SIGN_IN,
  PAGE.SIGN_UP,
  PAGE.CHANGE_PASSWORD,
  PAGE.INQUIRY_PASSWORD,
  PAGE.TERMS_OF_SERVICE,
  PAGE.EXPIRE,
  PAGE.PLAN_EXPIRED,
]
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  function getUrl(pathname: string, locale: string) {
    return `${host}/${locale}${pathname === '/' ? '' : pathname}`
  }

  const routes = pathNames.map((pathName) => ({
    url: getUrl(pathName, defaultLocale),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(locales.map((locale) => [locale, getUrl(pathName, locale)])),
    },
  }))

  const recruitUrls = await getServerRecruitUrl()
  const postings = recruitUrls.map((recruitUrl) => ({
    url: getUrl(
      PAGE.RECRUIT(recruitUrl.enterprise_recruit_url, recruitUrl.posting_id),
      defaultLocale,
    ),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [
          locale,
          getUrl(PAGE.RECRUIT(recruitUrl.enterprise_recruit_url, recruitUrl.posting_id), locale),
        ]),
      ),
    },
  }))

  return [
    {
      url: 'https://www.steadhr.com/',
      lastModified: new Date(),
    },
    ...routes,
    ...postings,
  ]
}
