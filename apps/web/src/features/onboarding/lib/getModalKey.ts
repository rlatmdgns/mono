import { MODAL } from '@/shared/constants'

export const getModalKey = (type: string) => {
  switch (type) {
    case 'alarm':
      return MODAL.ADD_ALARM
    case 'content':
      return MODAL.ADD_CONTENT
    case 'survey':
      return MODAL.ONBOARDING_SURVEY
    default:
      return MODAL.ADD_EVALUATION
  }
}
