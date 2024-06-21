import { MailMenuProps } from '@/app/[locale]/mail/_components/MailMenu/MailMenu.interface'
import { PAGE } from '@/shared/constants'
import { useTranslations } from 'next-intl'

export const useMailMenuConstants = () => {
  const $t = useTranslations('mail')
  const MAIL_MENUS: MailMenuProps[] = [
    {
      type: 'in',
      label: $t('inbox'),
      link: PAGE.MAIL_INBOX,
      icon: 'icon/inbox-solid',
    },
    {
      type: 'sent',
      label: $t('sent'),
      link: PAGE.MAIL_SENT,
      icon: 'icon/send-solid',
    },
    {
      type: 'trash',
      label: $t('trash'),
      link: PAGE.MAIL_TRASH,
      icon: 'icon/delete-solid',
    },
  ]

  return { MAIL_MENUS }
}
