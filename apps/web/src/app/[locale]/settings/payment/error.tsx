'use client'

import { Warning } from '@/shared/ui'
import * as Sentry from '@sentry/nextjs'
import React, { useEffect } from 'react'
import { useTranslations } from 'next-intl'

interface ErrorPageProps {
  error: Error & { digest?: string }
}

export default function Error({ error }: ErrorPageProps) {
  const $t = useTranslations('warning')
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Warning title={$t('title')} description={$t('description')} />
    </div>
  )
}
