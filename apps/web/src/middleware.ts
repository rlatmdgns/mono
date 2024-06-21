// middleware.ts

import { PAGE } from '@/shared/constants'
import { verifyToken } from '@/shared/lib/token'
import { NextRequest, NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { defaultLocale, localePrefix, locales, pathnames } from './i18nConfig'

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}

const authMatcher = [
  '/',
  '/applicants',
  '/create-email',
  '/create-posting',
  '/calendar',
  '/sign-in',
  '/postings',
  '/posting-locker',
  '/mail',
  '/settings',
  '/plan-expired',
  '/build-application',
]

const omsMatcher = ['/onboarding', '/onboarding/reports', '/scenarios', '/create-scenario']

const handleI18nRouting = createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  pathnames,
})

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')
  const locale = request.cookies.get('NEXT_LOCALE')
  const { pathname } = request.nextUrl
  if (!locale) request.cookies.set('NEXT_LOCALE', defaultLocale)

  if (!authMatcher.includes(pathname)) {
    return handleI18nRouting(request)
  }

  try {
    const result = await verifyToken(token?.value)
    const isPlanExpires = !result.is_plan

    if (isPlanExpires) {
      /**
       * 플랜 만료 되었을 때, 만료페이지가 아니면 결제페이지로 이동
       * */
      if (request.nextUrl.pathname.startsWith(PAGE.SETTINGS_PAYMENT)) {
        NextResponse.next()
        return handleI18nRouting(request)
      }

      if (!request.nextUrl.pathname.startsWith(PAGE.PLAN_EXPIRED)) {
        NextResponse.redirect(new URL(PAGE.PLAN_EXPIRED, request.url))
        return handleI18nRouting(request)
      }
    }

    if (request.nextUrl.pathname.startsWith(PAGE.SIGN_IN)) {
      /**
       * 로그인 페이지로 이동할 때, 로그인 되어있으면 홈으로 이동
       * */
      return NextResponse.redirect(new URL(PAGE.HOME, request.url))
    }

    // if (omsMatcher.includes(pathname)) {
    //   return NextResponse.redirect(new URL(PAGE.HOME, request.url))
    // }
  } catch (error) {
    if (request.nextUrl.pathname.startsWith(PAGE.SIGN_IN)) {
      NextResponse.next()
      return handleI18nRouting(request)
    }

    NextResponse.redirect(new URL(PAGE.SIGN_IN, request.url))
    return handleI18nRouting(request)
  }

  NextResponse.next()
  return handleI18nRouting(request)
}
