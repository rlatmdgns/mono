import React from 'react'
import { Chip } from '@repo/ui'

interface ReportSceneStatusProps {
  status: string
}

const ReportSceneStatus = ({ status }: ReportSceneStatusProps) => {
  if (status === '-') {
    return <div>-</div>
  }
  if (status === '진행중') {
    return <Chip label="진행중" size="sm" status="info" />
  }
  return <Chip label="완료" size="sm" />
}

export default ReportSceneStatus
