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
        height: '100%',
      }}
    >
      <Warning
        title={$t('not_access_announcement')}
        description={$t('not_access_announcement_description')}
        subDescription={$t('not_access_announcement_sub_description')}
      />
    </div>
  )
}
