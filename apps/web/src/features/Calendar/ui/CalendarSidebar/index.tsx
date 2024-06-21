'use client'

import { usePostings } from '@/shared/hooks'
import { Button } from '@/shared/ui'
import { Postings } from '@/interface/postings'
import React from 'react'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'
import { CalendarFolderList } from '../CalendarFolderList'
import { postingIdAtom } from '../../model/atom'

interface CalendarSidebarProps {
  initialFolder: Postings
}

export const CalendarSidebar = ({ initialFolder }: CalendarSidebarProps) => {
  const { data } = usePostings(initialFolder)
  const postingId = useRecoilValue(postingIdAtom)
  const setResetPostingId = useResetRecoilState(postingIdAtom)
  const handlePostingIdReset = () => {
    setResetPostingId()
  }
  const $t = useTranslations()

  if (!data?.folder_list) return

  const folders = [
    ...data?.folder_list,
    {
      folder_id: 'null',
      folder_name: $t('folder.folder_none'),
      postings: data?.none_folder,
    },
  ]
  return (
    <Styles.Aside>
      <Styles.Container>
        <Styles.EntirePosting $isActive={!postingId}>
          <Button
            text={$t('sidebar.all_announcements')}
            iconSource="icon/recruitment-solid"
            state="standard"
            onClick={handlePostingIdReset}
          />
        </Styles.EntirePosting>
        <CalendarFolderList folders={folders} />
      </Styles.Container>
    </Styles.Aside>
  )
}
