'use client'

import { IconButton } from '@/shared/ui'
import SettingSidebar from '@/app/[locale]/settings/_container/SettingSidebar'
import Link from 'next/link'
import React from 'react'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface SettingLayoutProps {
  authority: string
  children: React.ReactNode
}

const SettingLayout = ({ authority, children }: SettingLayoutProps) => {
  const $t = useTranslations('page')

  return (
    <>
      <Styles.Header>
        <Styles.Title>{$t('setting')}</Styles.Title>
        <Link href="/">
          <IconButton icon="icon/cancle-line1" />
        </Link>
      </Styles.Header>
      <Styles.Container>
        <SettingSidebar authority={authority} />
        <Styles.Content>{children}</Styles.Content>
      </Styles.Container>
    </>
  )
}

export default SettingLayout
