import { Button } from '@/shared/ui'
import React from 'react'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface MemberSettingHeaderProps {
  onClose: () => void
}

const MemberSettingFooter = ({ onClose }: MemberSettingHeaderProps) => {
  const $t = useTranslations('common')
  return (
    <Styles.Footer>
      <Button text={$t('cancel')} width="50px" state="standard" style="mono" onClick={onClose} />
      <Button type="submit" text={$t('save')} width="72px" />
    </Styles.Footer>
  )
}

export default MemberSettingFooter
