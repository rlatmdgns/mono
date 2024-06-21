'use client'

import { Warning } from '@/shared/ui'
import React from 'react'
import { useTranslations } from 'next-intl'

export default function Error() {
  const $t = useTranslations('messages')
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Warning
        title={$t('no_exist_announcement')}
        description={$t('no_exist_announcement_description')}
      />
    </div>
  )
}
