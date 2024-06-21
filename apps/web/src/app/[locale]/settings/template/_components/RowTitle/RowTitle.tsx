'use client'

import React from 'react'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

const RowTitle = () => {
  const $t = useTranslations('setting.template_setting')

  return (
    <Styles.RowTitle>
      <div>{$t('template_name')}</div>
      <div>{$t('creator')}</div>
    </Styles.RowTitle>
  )
}

export default RowTitle
