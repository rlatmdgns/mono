'use client'

import * as Styles from './styles'
import { TriggerStates } from './Tabs.interface'
import React from 'react'

interface TabsProps {
  state: TriggerStates
  children: React.ReactNode
}

const TabsWrapper = ({ state, children }: TabsProps) => {
  return <Styles.TabsWrapper state={state}>{children}</Styles.TabsWrapper>
}

export default TabsWrapper
