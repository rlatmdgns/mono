'use client'

import React from 'react'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

const EditPostingHeader = () => {
  const $t = useTranslations('announcement_detail.setting.announcement')
  return (
    <>
      <Styles.Header>
        <Styles.Title>{$t('modify')}</Styles.Title>
      </Styles.Header>
      <Styles.ProgressBar $step={0} />
    </>
  )
}

export default EditPostingHeader
