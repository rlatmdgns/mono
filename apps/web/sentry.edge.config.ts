import { SENTRY_DSN } from '@/shared/constants'
import * as Sentry from '@sentry/nextjs'

if (process.env.SENTRY_ENV === 'production') {
  Sentry.init({
    dsn: SENTRY_DSN,
    environment: process.env.SENTRY_ENV,
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 0.5,
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
