import * as Styles from './styles'
import { Avatar } from '@/shared/ui'
import React from 'react'

interface ScheduleAttendantItemProps {
  userName?: string
  userProfile?: string
}

export const ScheduleAttendantItem = ({ userName, userProfile }: ScheduleAttendantItemProps) => {
  if (!userName || !userProfile) return null
  return (
    <Styles.Wrapper>
      <Avatar size="sm" alt={userName} src={userProfile} />
      <Styles.Text>{userName}</Styles.Text>
    </Styles.Wrapper>
  )
}
