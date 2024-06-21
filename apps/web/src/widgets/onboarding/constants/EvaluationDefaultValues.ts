import { ALARM_PERIODS } from '@/widgets/onboarding/constants/alarmPeriods'

export const EVALUATION_DEFAULT_VALUES = {
  title: '',
  description: '',
  evaluation_sections: [
    {
      section_title: '도메인 이해능력',
      section_description: '입사자가 HR 분야를 얼마나 이해하고 있는지 평가해주세요.',
      evaluation_items: [
        {
          item_title: '',
          item_type: 'choice',
        },
      ],
    },
  ],
  time: ALARM_PERIODS[0],
  receivers: [],
}
