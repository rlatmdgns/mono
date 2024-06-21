import { SlackAlertValues } from '@/entities/apps/types/slack'
import { http } from '@/shared/lib'
import { API_URL } from '@/shared/constants'

export const updateSlackNotification = (values: SlackAlertValues) => {
  return http.patch(API_URL.SET_SLACK_NOTIFICATION, {
    ...values,
  })
}
