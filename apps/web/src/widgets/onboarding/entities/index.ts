import { SURVEY_TYPES } from '@/features/onboarding/constants'

export const DEFAULT_SURVEY = {
  title: '',
  description: '',
  receivers: [],
  questions: [
    {
      type: SURVEY_TYPES[0].value,
      title: '',
      file: null,
      is_required: false,
      items: [
        {
          title: '',
        },
      ],
    },
    {
      type: SURVEY_TYPES[1].value,
      title: '',
      file: null,
      is_required: false,
      items: [
        {
          title: '',
        },
      ],
    },
    {
      type: SURVEY_TYPES[2].value,
      title: '',
      file: null,
      is_required: false,
    },
  ],
}

export interface OnboardingSidebarFreshmanList {
  name: string
  id: number
  scenarios: OnboardingSidebarScenarioItem[]
}

export interface OnboardingSidebarScenarioItem {
  title: string
  description?: string
  id: number
}

export const DUMMY_ADJUST_SCENARIOS = [
  {
    title: '전사 온보딩',
    description: '전사에게 적용되는 온보딩 시나리오',
    sequences: [],
  },
  {
    title: '전사 온보딩2',
    description: '전사에게 적용되는 온보딩 시나리오',
    sequences: [],
  },
  {
    title: '전사 온보딩3',
    description: '전사에게 적용되는 온보딩 시나리오',
    sequences: [],
  },
]

export interface OmsMember {
  id: number
  name: string
  email: string
  profile: string
  type?: 'ATS' | 'OMS'
}
