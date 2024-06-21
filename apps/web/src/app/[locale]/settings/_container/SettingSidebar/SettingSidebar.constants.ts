import { PAGE } from '@/shared/constants'

export const SETTING_MENUS = [
  {
    ko: '개인 설정',
    en: 'Personal Settings',
    items: [
      {
        ko: '내 계정',
        en: 'My Account',
        path: PAGE.SETTINGS_ACCOUNT,
      },
      {
        ko: '서비스 연동',
        en: 'Apps',
        path: PAGE.SETTINGS_APPS,
      },
    ],
  },
  {
    ko: '환경 설정',
    en: 'Environment Settings',
    items: [
      {
        ko: '기업 정보',
        en: 'Enterprise Information',
        path: PAGE.SETTINGS_ENTERPRISE,
      },
      {
        ko: '멤버 설정',
        en: 'Member Settings',
        path: PAGE.SETTINGS_MEMBER,
      },
      {
        ko: '공고 설정',
        en: 'Posting Settings',
        path: PAGE.SETTINGS_POSTING,
      },
      {
        ko: '템플릿 설정',
        en: 'Template Settings',
        path: PAGE.SETTINGS_TEMPLATE,
      },
    ],
  },
]
export const SETTING_EVALUATOR_MENUS = [
  {
    ko: '개인 설정',
    en: 'Personal Settings',
    items: [
      {
        ko: '내 계정',
        en: 'My Account',
        path: PAGE.SETTINGS_ACCOUNT,
      },
      {
        ko: '서비스 연동',
        en: 'Apps',
        path: PAGE.SETTINGS_APPS,
      },
    ],
  },
]

export const ADMIN_SETTING_MENU = {
  ko: '결제',
  en: 'Payment',
  items: [
    {
      ko: '결제 관리',
      en: 'Payment Management',
      path: PAGE.SETTINGS_PAYMENT,
    },
    {
      ko: '결제 내역',
      en: 'Payment History',
      path: PAGE.SETTINGS_PAYMENT_HISTORY,
    },
  ],
}
