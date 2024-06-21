import React from 'react'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface MemberSettingTopProps {
  count?: number
}

const AddMemberTop = ({ count }: MemberSettingTopProps) => {
  const $t = useTranslations()
  return (
    <Styles.Wrapper>
      {$t('common.whole')} ({count})
    </Styles.Wrapper>
  )
}

export default AddMemberTop
