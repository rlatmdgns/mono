import * as Styles from './styles'
import React from 'react'

interface PanelProps {
  $isActive: boolean
  children: React.ReactNode
}

const Panel = ({ $isActive, children }: PanelProps) => {
  if (!$isActive) return null

  return <Styles.Panel>{children}</Styles.Panel>
}

export default Panel
