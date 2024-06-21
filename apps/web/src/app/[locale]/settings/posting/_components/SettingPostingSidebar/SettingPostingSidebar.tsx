import { Folder } from '@/interface/sidebar'
import { JobPosting } from '@/interface/jobPosting'
import React from 'react'
import SettingPostingFolderList from '@/app/[locale]/settings/posting/_components/SettingPostingFolderList'
import * as Styles from './styles'

interface SettingPostingSidebarProps {
  folders: { folder_list: Folder[]; none_folder: JobPosting[] }
}

const SettingPostingSidebar = ({ folders }: SettingPostingSidebarProps) => {
  return (
    <Styles.Wrapper>
      <SettingPostingFolderList folders={folders} />
    </Styles.Wrapper>
  )
}

export default SettingPostingSidebar
