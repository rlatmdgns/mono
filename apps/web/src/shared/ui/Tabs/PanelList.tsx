import { useRecoilValue } from 'recoil'
import { selectedTabState } from './atom'
import Panel from './Panel'
import * as Styles from './styles'
import React from 'react'

interface PanelListProps {
  tabContents: React.ReactNode[]
  height?: string
}

const PanelList = ({ tabContents, height }: PanelListProps) => {
  const selectedTab = useRecoilValue(selectedTabState)

  return (
    <Styles.PanelList $height={height}>
      {tabContents?.map((content, index) => (
        <Panel key={index} $isActive={selectedTab === index}>
          {content}
        </Panel>
      ))}
    </Styles.PanelList>
  )
}

export default PanelList
