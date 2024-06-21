'use client'

import { LinkButton, Warning } from '@/shared/ui'
import { PAGE } from '@/shared/constants'
import React from 'react'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

const ExpirePage = () => {
  const $t = useTranslations()
  return (
    <Styles.Wrapper>
      <Warning
        title={$t('expire.title')}
        description={$t('expire.description')}
        subDescription={$t('expire.sub_description')}
      />
      <Styles.ButtonBox>
        <LinkButton
          size="md"
          href={PAGE.HOME}
          width="184px"
          text={$t('common.go_home')}
          state="standard"
        />
      </Styles.ButtonBox>
    </Styles.Wrapper>
  )
}

export default ExpirePage
