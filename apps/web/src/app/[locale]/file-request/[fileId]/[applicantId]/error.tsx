'use client'

import { Warning } from '@/shared/ui'
import React from 'react'

interface ErrorPageProps {
  error: Error & { digest?: string }
}

const Error = ({ error }: ErrorPageProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Warning title={error.message} />
    </div>
  )
}

export default Error
