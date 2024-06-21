'use client'

import SettingTitle from '@/app/[locale]/settings/_components/SettingTitle'
import MemberTabs from '@/app/[locale]/settings/member/_components/MemberTabs'
import MemberUtils from '@/app/[locale]/settings/member/_components/MemberUtils'
import { thList } from '@/app/[locale]/settings/member/_container/MemberContainer/memberContainer.constant'
import { searchAtom } from '@/app/[locale]/settings/member/_recoil/atom'
import React, { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { SearchInput } from '@/shared/ui'
import * as Styles from './styles'
import { useLocale, useTranslations } from 'next-intl'

interface SettingLayoutProps {
  authority: string
  children: React.ReactNode
}

const MemberContainer = ({ authority, children }: SettingLayoutProps) => {
  const currentLocale = useLocale()
  const $t = useTranslations('setting.member_setting')
  const [searchData, setSearchData] = useRecoilState(searchAtom)

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchData(event.target.value)
  }

  return (
    <Styles.Container>
      <SettingTitle title={$t('title')} />
      <MemberUtils authority={authority} />
      <Styles.SearchBar>
        <MemberTabs />
        <Styles.Search>
          <SearchInput
            value={searchData}
            placeholder={$t('search_placeholder')}
            onChange={handleSearch}
          />
        </Styles.Search>
      </Styles.SearchBar>
      <Styles.MemberList>
        <Styles.Thead>
          <Styles.MemberRow>
            {thList.map((th: any, index) => (
              <Styles.Data key={`th_${index}`}>{th[currentLocale]}</Styles.Data>
            ))}
          </Styles.MemberRow>
        </Styles.Thead>
        <Styles.Tbody>{children}</Styles.Tbody>
      </Styles.MemberList>
    </Styles.Container>
  )
}

export default MemberContainer
