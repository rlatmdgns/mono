import { IconButton } from '@/shared/ui'
import React from 'react'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface MemberSettingHeaderProps {
  onClick: () => void
}

const MemberSettingHeader = ({ onClick }: MemberSettingHeaderProps) => {
  const $t = useTranslations('setting.member_setting')
  return (
    <Styles.Header>
      {$t('posting_member_setting')}
      <IconButton icon="icon/cancle-line1" onClick={onClick} />
    </Styles.Header>
  )
}

export default MemberSettingHeader
