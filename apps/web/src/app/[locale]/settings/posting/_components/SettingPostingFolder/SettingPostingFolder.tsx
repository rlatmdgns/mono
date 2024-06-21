import SettingPostingList from '@/app/[locale]/settings/posting/_components/SettingPostingList'
import { JobPosting } from '@/interface/jobPosting'
import React from 'react'
import * as Styles from './styles'
import { Tooltip } from '@/shared/ui'

interface FolderProps {
  name?: string
  postings?: JobPosting[]
}

const SettingPostingFolder = ({ name, postings }: FolderProps) => {
  if (postings?.length === 0) return null

  return (
    <Styles.Folder>
      <Styles.FolderName>
        <Tooltip text={name as string} isOverflow>
          {name}
        </Tooltip>
      </Styles.FolderName>
      <SettingPostingList postings={postings} />
    </Styles.Folder>
  )
}

export default SettingPostingFolder
