import { SENTRY_DSN } from '@/shared/constants'
import * as Sentry from '@sentry/nextjs'
import { Integrations } from '@sentry/nextjs'

if (process.env.NEXT_PUBLIC_SENTRY_ENV === 'production') {
  Sentry.init({
    dsn: SENTRY_DSN,
    // Replay may only be enabled for the client-side
    integrations: [Sentry.replayIntegration(), new Integrations.BrowserTracing()],
    environment: process.env.NEXT_PUBLIC_SENTRY_ENV,
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 0.5,

    // Capture Replay for 10% of all sessions,
    // plus for 100% of sessions with an error
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,

    beforeSend(event, hint) {
      if (event.level === 'warning') {
        return null
      }
      return event
    },
    // ...

    // Note: if you want to override the automatic release value, do not set a
    // `release` value here - use the environment variable `SENTRY_RELEASE`, so
    // that it will also get attached to your source maps
  })
}
