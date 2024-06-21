'use client'

import * as Styles from './styles'
import { Folder } from '@/interface/sidebar'
import JobPostingList from '@/features/Sidebar/components/JobPostingList'

interface JobPostingNoneFolderList {
  folder: Folder
}

const JobPostingNoneFolderList = ({ folder }: JobPostingNoneFolderList) => {
  const isEmpty = folder?.postings && folder?.postings.length < 1

  if (isEmpty) {
    return <Styles.Empty />
  }
  return (
    <Styles.Wrapper>
      <Styles.Content>
        <JobPostingList folder={folder} isNonFolder={true} />
      </Styles.Content>
    </Styles.Wrapper>
  )
}

export default JobPostingNoneFolderList
