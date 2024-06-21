'use client'

import { Button } from '@/shared/ui'
import React from 'react'
import * as Styles from './styles'
import { useLocale, useTranslations } from 'next-intl'

interface MemberSettingTopProps {
  count?: number
  onClick: () => void
}

const SettingPostingMemberTop = ({ count, onClick }: MemberSettingTopProps) => {
  const currentLocale = useLocale()
  const $t = useTranslations()

  return (
    <Styles.Wrapper>
      {$t('common.member')} ({count || 0})
      <Button
        size="xs"
        width={currentLocale === 'ko' ? '84px' : '120px'}
        style="fill-weak"
        iconSource="icon/add-solid"
        text={$t('common.add_member')}
        onClick={onClick}
      />
    </Styles.Wrapper>
  )
}

export default SettingPostingMemberTop
