import React from 'react'
import { Chip, Tooltip } from '@repo/ui'

interface ReportSceneStatusProps {
  managers: string[]
}

const ReportSceneManager = ({ managers }: ReportSceneStatusProps) => {
  const count = managers.length

  if (count < 1) return null
  if (count > 1) {
    return (
      <Tooltip text={managers.join(', ')} direction="right">
        <Chip label={`${managers[0]}외 ${count - 1}명`} size="sm" status="success" />
      </Tooltip>
    )
  }
  return <Chip label={managers[0]} size="sm" status="success" />
}

export default ReportSceneManager
