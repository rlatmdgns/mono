'use client'

import { Folder } from '@/interface/sidebar'
import { JobPosting } from '@/interface/jobPosting'
import React from 'react'
import SettingPostingFolder from '@/app/[locale]/settings/posting/_components/SettingPostingFolder/SettingPostingFolder'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface FolderListProps {
  folders: { folder_list: Folder[]; none_folder: JobPosting[] }
}

const SettingPostingFolderList = ({ folders }: FolderListProps) => {
  const $t = useTranslations('folder')

  return (
    <Styles.List>
      {folders.folder_list?.map((folder, index) => {
        return (
          <SettingPostingFolder
            key={folder.folder_id}
            name={folder.folder_name}
            postings={folder.postings}
          />
        )
      })}
      <SettingPostingFolder name={$t('folder_none')} postings={folders.none_folder} />
    </Styles.List>
  )
}

export default SettingPostingFolderList
