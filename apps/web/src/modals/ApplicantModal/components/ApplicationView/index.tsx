import * as Styles from './styles'
import { ApplicationViewer } from '@/widgets/application-viewer'
import React from 'react'

interface ApplicationViewProps {
  applicantId: string
  isPdfActive: boolean
  isEvaluator: boolean
}

export const ApplicationView = ({
  applicantId,
  isPdfActive,
  isEvaluator,
}: ApplicationViewProps) => {
  if (isPdfActive) return null
  return (
    <Styles.Wrapper>
      <Styles.Container>
        <ApplicationViewer applicantId={applicantId} isEvaluator={isEvaluator} />
      </Styles.Container>
    </Styles.Wrapper>
  )
}
