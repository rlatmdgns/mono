import { SidebarItemData } from '@/features/Sidebar/Sidebar.interface'
import { PAGE } from '@/shared/constants'

export const ONBOARDING_MENUS: SidebarItemData[] = [
  {
    icon: 'icon/home-line',
    title: {
      ko: '홈',
      en: 'Home',
    },
    link: PAGE.ONBOARDING,
    path: PAGE.ONBOARDING,
    authProcess: true,
  },
  {
    icon: 'icon/book-line',
    title: {
      ko: '시나리오',
      en: 'Scenarios',
    },
    link: PAGE.SCENARIOS,
    path: PAGE.SCENARIOS,
    authProcess: true,
  },
  {
    icon: 'icon/report-line',
    title: {
      ko: '리포트',
      en: 'Reports',
    },
    link: PAGE.ONBOARDING_REPORTS,
    path: PAGE.ONBOARDING_REPORTS,
    authProcess: true,
  },
]

export const DEFAULT_SCENARIO = {
  is_edited: false,
  title: '',
  description: '',
  freshman: [
    {
      d_day: 0,
      scenes: [],
      isAppend: true,
    },
  ],
  manager: [
    {
      d_day: 0,
      scenes: [],
      isAppend: true,
    },
  ],
}
