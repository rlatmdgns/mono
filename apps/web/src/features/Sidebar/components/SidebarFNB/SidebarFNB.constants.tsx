import { PAGE } from '@/shared/constants'
import { SidebarItemData } from '@/features/Sidebar/Sidebar.interface'

export const SIDEBAR_FNB_MENUS: SidebarItemData[] = [
  {
    icon: 'icon/mail-solid',
    title: {
      ko: '메일',
      en: 'Mail',
    },
    link: PAGE.MAIL_INBOX,
    path: '/mail',
    authProcess: true,
  },
  {
    icon: 'icon/calendar-solid',
    title: {
      ko: '면접 일정',
      en: 'Interview Schedule',
    },
    link: '/calendar',
  },
  {
    icon: 'icon/member-solid',
    title: {
      ko: '인재풀',
      en: 'Talent Pool',
    },
    link: PAGE.APPLICANTS,
    authProcess: true,
  },
  {
    icon: 'icon/archive-solid',
    title: {
      ko: '보관함',
      en: 'Locker',
    },
    link: PAGE.POSTING_LOCKER,
    authProcess: true,
  },
]

export const SIDEBAR_EVALUATOR_MENUS: SidebarItemData[] = [
  {
    icon: 'icon/calendar-solid',
    title: {
      ko: '면접 일정',
      en: 'Interview Schedule',
    },
    link: '/calendar',
  },
]
