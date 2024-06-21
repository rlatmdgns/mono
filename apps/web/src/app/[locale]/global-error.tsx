'use client'
import GlobalError from '@/features/GlobalError/GlobalError'
import * as Sentry from '@sentry/react'
import React, { useEffect } from 'react'

export default function GlobalErrorPage({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])
  const message = error.message
  return <GlobalError message={message} />
}
