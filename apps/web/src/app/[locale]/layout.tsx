'use client'

import React from 'react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import StyledComponentsRegistry from '@/shared/lib/registry'
import Themes from '@/styles/theme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@/styles/globalStyle'
import { RecoilRoot } from 'recoil'
import { ReactQueryProviders } from '@/shared/lib/reactQueryProvider'
import localFont from 'next/font/local'
import ToastProvider from '@/shared/lib/ToastProvider'
import ModalContainer from '@/shared/lib/ModalContainer'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { MSWComponent } from '@/mocks/MSWComponent'
import CustomNextIntlClientProvider from '@/shared/lib/CustomNextIntlClientProvider'
import { useTranslations } from 'next-intl'
import { PostHogProvider } from 'posthog-js/react'

const pretendard = localFont({
  src: [
    {
      path: '../../../public/assets/fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

type RootLayoutProps = {
  children: React.ReactNode
  params: { locale: string }
}

export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  const timeZone = new Date()
  const loading =
    locale === 'ko' ? '요청중입니다. 잠시만 기다려주세요.' : 'Loading. Please wait a moment.'
  return (
    <html lang={locale} className={pretendard.className}>
      <body>
        <CustomNextIntlClientProvider locale={locale} timeZone={timeZone}>
          <StyledComponentsRegistry>
            <ThemeProvider theme={Themes}>
              <GlobalStyle locale={locale} />
              <RecoilRoot>
                <ReactQueryProviders>
                  <ToastProvider>
                    <PostHogProvider>{children}</PostHogProvider>
                    <MSWComponent />
                    <SpeedInsights />
                    <ModalContainer />
                  </ToastProvider>
                  <ReactQueryDevtools />
                </ReactQueryProviders>
              </RecoilRoot>
            </ThemeProvider>
          </StyledComponentsRegistry>
          <div id="loading">
            <span>{loading}</span>
          </div>
          <div id="dropdown" />
          <div id="modal" />
          <div id="tooltip" />
        </CustomNextIntlClientProvider>
      </body>
    </html>
  )
}
