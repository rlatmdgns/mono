import { isValueFilled } from './isValueFilled'
import { Activity, ActivityKeys } from '@/entities/Application/types'

const activityValidation = (activity: Activity) => {
  let keys: ActivityKeys[] = ['type', 'name', 'status', 'start_date', 'end_date']

  if (!activity.is_activity) {
    return true
  }

  if (activity.status === '활동중') {
    keys = keys.filter((key) => key !== 'end_date')
  }

  return keys.every((key) => isValueFilled(activity[key]))
}

export const activitiesValidation = (form: Activity[]) => {
  if (!form) {
    return true
  }

  return form?.every((activity) => {
    return activityValidation(activity)
  })
}
