'use client'

import SettingTitle from '@/app/[locale]/settings/_components/SettingTitle'
import SettingPostingMember from '@/app/[locale]/settings/posting/_components/SettingPostingMember'
import SettingPostingSidebar from '@/app/[locale]/settings/posting/_components/SettingPostingSidebar'
import {
  settingPostingHasAccessAtom,
  settingPostingIdAtom,
} from '@/app/[locale]/settings/posting/_recoil'
import { usePostings } from '@/shared/hooks'
import { Postings } from '@/interface/postings'
import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface SettingPostingContentProps {
  initialData: Postings
}

const SettingPostingContainer = ({ initialData }: SettingPostingContentProps) => {
  const { data } = usePostings(initialData)
  const $t = useTranslations('setting.posting_setting')

  const setPostingId = useSetRecoilState(settingPostingIdAtom)
  const setHasAccess = useSetRecoilState(settingPostingHasAccessAtom)

  const getInitPosting = () => {
    const initFolderPosting = data?.folder_list.find(
      (list) => list.postings && list.postings.length > 0,
    )
    const initNoneFolderPosting = data?.none_folder
    if (!(initFolderPosting && initFolderPosting)) return
    if (!initFolderPosting.postings) return
    if (!initNoneFolderPosting) return

    setPostingId(initFolderPosting.postings[0].posting_id || initNoneFolderPosting[0].posting_id)

    setHasAccess(initFolderPosting.postings[0].posting_member)
  }

  useEffect(() => {
    getInitPosting()
  }, [data])

  if (!data) return

  return (
    <Styles.Wrapper>
      <SettingTitle title={$t('title')} />
      <Styles.Container>
        <SettingPostingSidebar folders={data} />
        <Styles.Content>
          <SettingPostingMember />
        </Styles.Content>
      </Styles.Container>
    </Styles.Wrapper>
  )
}

export default SettingPostingContainer
