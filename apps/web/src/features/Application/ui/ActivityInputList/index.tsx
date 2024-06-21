'use client'

import * as Styles from './styles'
import { UseFieldArrayRemove, UseFieldArrayUpdate } from 'react-hook-form'
import { AddMultipleInputButton } from '../AddMultipleInputButton'
import { ActivityInputItem } from './ActivityInputItem'
import { Activity, ApplicantRequest } from '@/entities/Application/types/ApplicantRequest'

interface ActivityInputListProps {
  hasActivity: boolean
  index: number
  onAppend: () => void
  update: UseFieldArrayUpdate<ApplicantRequest, 'activities'>
  remove: UseFieldArrayRemove
  activities: Activity[]
}

export const ActivityInputList = ({
  hasActivity,
  activities,
  onAppend,
  update,
  remove,
}: ActivityInputListProps) => {
  if (!hasActivity) return null

  return (
    <Styles.Wrapper>
      {activities?.map((activity, activity_index) => (
        <ActivityInputItem
          key={`activity_${activity_index}`}
          activityIndex={activity_index}
          activity={activity}
          update={update}
          remove={remove}
        />
      ))}
      <AddMultipleInputButton text="활동 추가" isAddDisabled={!hasActivity} onClick={onAppend} />
    </Styles.Wrapper>
  )
}
