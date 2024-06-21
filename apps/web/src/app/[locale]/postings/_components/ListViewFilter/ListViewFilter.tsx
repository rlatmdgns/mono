import React from 'react'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

const ListViewFilter = () => {
  const $t = useTranslations('common')
  return (
    <Styles.Wrapper>
      <div>{$t('applicant')}</div>
      <div>{$t('step')}</div>
      <div>{$t('vote_status')}</div>
      <div>{$t('applicant_channel')}</div>
      <div>{$t('tag')}</div>
      <div>{$t('applicant_date')}</div>
    </Styles.Wrapper>
  )
}

export default ListViewFilter
