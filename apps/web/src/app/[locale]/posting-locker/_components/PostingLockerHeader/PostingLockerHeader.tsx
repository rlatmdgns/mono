'use client'

import * as Styles from './styles'
import { useTranslations } from 'next-intl'

const PostingLockerHeader = () => {
  const $t = useTranslations('announcements_thead')
  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Styles.NavItem>{$t('name')}</Styles.NavItem>
        <Styles.NavItem>{$t('applicants_count')}</Styles.NavItem>
        <Styles.NavItem>{$t('posting_member')}</Styles.NavItem>
        <Styles.NavItem>{$t('deadline')}</Styles.NavItem>
        <Styles.NavItem>{$t('create_date')}</Styles.NavItem>
        <Styles.NavItem></Styles.NavItem>
      </Styles.Container>
    </Styles.Wrapper>
  )
}

export default PostingLockerHeader
