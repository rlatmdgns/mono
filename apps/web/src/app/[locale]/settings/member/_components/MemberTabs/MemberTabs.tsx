'use client'
import * as Styles from './styles'
import { useRecoilState, useRecoilValue } from 'recoil'
import { CurrentTabAtom, TabCountAtom } from '@/app/[locale]/settings/member/_recoil/atom'
import { MEMEBER_TABS } from '@/app/[locale]/settings/member/_components/MemberTabs/MemberTabs.constant'
import { useLocale } from 'next-intl'

const MemberTabs = () => {
  const [currentTab, setCurrentTab] = useRecoilState(CurrentTabAtom)
  const currentLocale = useLocale()

  const TabCount = useRecoilValue(TabCountAtom)

  const handleCurrentTab = (type: string) => setCurrentTab(type)

  return (
    <Styles.Tabs>
      {MEMEBER_TABS.map((tab: any) => (
        <Styles.Tab
          key={tab.type}
          $isCurrent={currentTab === tab.type}
          onClick={() => handleCurrentTab(tab.type)}
        >
          {tab[currentLocale]}
          <Styles.Count>({TabCount[tab.type]})</Styles.Count>
        </Styles.Tab>
      ))}
    </Styles.Tabs>
  )
}
export default MemberTabs
