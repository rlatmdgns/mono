import * as Styles from '../styles'
import { ApplicationViewerItemDataType } from '../../types'
import { EmptyData } from '../EmptyData'
import { ActivityDataItem } from './ActivityDataItem'
import { isActivity } from '@/entities/application-viewer/lib'

interface ActivitiesDataProps {
  name: string
  activities: ApplicationViewerItemDataType
}

export const ActivitiesData = ({ activities, name }: ActivitiesDataProps) => {
  if (name !== 'activities') return null
  if (!isActivity(activities)) return null

  const isEmpty = !activities[0]?.is_activity

  if (isEmpty) {
    return <EmptyData text="없음" />
  }
  return (
    <Styles.List>
      {activities.map((activity, index) => (
        <ActivityDataItem
          key={`activities_${index}`}
          type={activity.type}
          name={activity.name}
          status={activity.status}
          startDate={activity.start_date}
          endDate={activity.end_date}
          description={activity.description}
        />
      ))}
    </Styles.List>
  )
}
