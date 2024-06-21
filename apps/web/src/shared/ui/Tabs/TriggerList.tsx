'use client'

import { TriggerItem, TriggerStates } from './Tabs.interface'
import Trigger from './Trigger'
import * as Styles from './styles'

interface TriggerListProps {
  state: TriggerStates
  tabContents: TriggerItem[]
  size?: 'sm' | 'md'
  height?: number
}

const TriggerList = ({ state, tabContents, height }: TriggerListProps) => {
  return (
    <Styles.TriggerList $state={state} $height={height}>
      {tabContents?.map((tabContent, index) => (
        <Trigger key={index} index={index} state={state} {...tabContent} />
      ))}
    </Styles.TriggerList>
  )
}

export default TriggerList
