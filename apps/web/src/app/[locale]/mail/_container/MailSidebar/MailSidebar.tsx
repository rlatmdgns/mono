'use client'

import React from 'react'
import MailMenu from '@/app/[locale]/mail/_components/MailMenu'
import { Button } from '@/shared/ui'
import { MailBox, MailType } from '@/interface/mail'
import MailTitle from '@/app/[locale]/mail/_components/MailTitle'
import * as Styles from './styles'
import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { useTranslations } from 'next-intl'

interface MailSidebarProps {
  type: MailType
  mailCounts: MailBox
}

const MailSidebar = ({ type, mailCounts }: MailSidebarProps) => {
  const $t = useTranslations()
  const { openModal } = useModal()

  const handleClick = () => {
    openModal(MODAL.WRITE_MAIL)
  }

  return (
    <Styles.Wrapper>
      <MailTitle title={$t('page.mail')} />
      <Button
        iconSource="icon/edit-solid"
        text={$t('mail.write_mail')}
        state="standard"
        onClick={handleClick}
      />
      <MailMenu type={type} mailCounts={mailCounts} />
    </Styles.Wrapper>
  )
}

export default MailSidebar
