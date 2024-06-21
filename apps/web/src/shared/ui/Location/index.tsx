import React from 'react'
import * as Styles from './styles'
import { getInterviewTypeIcon } from '@/shared/ui/Location/Location.function'
import { Icon } from '@repo/ui'

interface LocationProps {
  scheduleAddress: string
  scheduleDetailAddress?: string
}

export const Location = ({ scheduleAddress, scheduleDetailAddress }: LocationProps) => {
  return (
    <>
      {scheduleAddress && (
        <Styles.Location $icon={getInterviewTypeIcon(scheduleAddress)}>
          <Icon icon={getInterviewTypeIcon(scheduleAddress)} color={'neutralGray500'} />
          <Styles.Text>
            {`${scheduleAddress} ${scheduleDetailAddress ? scheduleDetailAddress : ''}`}
          </Styles.Text>
        </Styles.Location>
      )}
    </>
  )
}
