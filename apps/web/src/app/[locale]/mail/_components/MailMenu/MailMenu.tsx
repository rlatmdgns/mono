'use client'

import React from 'react'
import * as Styles from './styles'
import MailMenuItem from '@/app/[locale]/mail/_components/MailMenuItem'
import { MailBox, MailType } from '@/interface/mail'
import useMailBox from '@/app/[locale]/mail/_hooks/useMailBox'
import { useMailMenuConstants } from '@/app/[locale]/mail/_components/MailMenu/hooks/useMailMenuConstants'

type Count = Record<MailType | string, number>

interface MailMenuProps {
  type: MailType
  mailCounts: MailBox
}

const MailMenu = ({ type, mailCounts }: MailMenuProps) => {
  const { data: countData } = useMailBox(mailCounts)

  const count: Count = {
    in: countData.mail_inbox,
    sent: countData.mail_outbox,
    trash: countData.mail_trash_can,
  }

  const { MAIL_MENUS } = useMailMenuConstants()

  return (
    <Styles.List>
      {MAIL_MENUS.map((menu) => (
        <MailMenuItem
          key={menu.type}
          title={menu.label}
          link={menu.link}
          icon={menu.icon}
          isActive={type === menu.type}
          count={count[menu.type]}
        />
      ))}
    </Styles.List>
  )
}

export default MailMenu
