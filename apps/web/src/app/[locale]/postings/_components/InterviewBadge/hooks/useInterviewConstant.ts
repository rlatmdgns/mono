import { useTranslations } from 'next-intl'
import { colorType, IconNames } from "@repo/ui/src/components/Icon";

interface InterviewState {
  [key: string]: {
    icon: IconNames
    iconColor: colorType
    label: string
  }
}

export const useInterviewConstant = () => {
  const $t = useTranslations('interview_status')
  const INTERVIEW_STATES: InterviewState = {
    scheduled: {
      icon: 'icon/interview-solid',
      iconColor: 'blue500',
      label: $t('scheduled'),
    },
    completed: {
      icon: 'icon/interview-complete-solid',
      iconColor: 'green700',
      label: $t('completed'),
    },
    ongoing: {
      icon: 'icon/interview-processing-solid',
      iconColor: 'orange700',
      label: $t('ongoing'),
    },
    canceled: {
      icon: 'icon/interview-cancle-solid',
      iconColor: 'white',
      label: $t('canceled'),
    },
  }
  return {INTERVIEW_STATES}
}
