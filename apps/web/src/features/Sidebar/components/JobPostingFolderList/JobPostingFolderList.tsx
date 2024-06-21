'use client'

import * as Styles from './styles'
import { Folder } from '@/interface/sidebar'
import { Droppable } from 'react-beautiful-dnd'

import JobPostingFolderItem from '@/features/Sidebar/components/JobPostingFolderItem'
import FolderLoading from '@/features/Sidebar/components/FolderLoading'

interface JobPostingFolderList {
  folders?: Folder[]
}

const JobPostingFolderList = ({ folders }: JobPostingFolderList) => {
  if (!folders) return <FolderLoading />

  return (
    <Droppable droppableId="folders-droppable" direction="vertical">
      {(outerProvided) => (
        <Styles.Wrapper ref={outerProvided.innerRef} {...outerProvided.droppableProps}>
          {folders?.map((folder, index) => (
            <JobPostingFolderItem key={folder.folder_id} folder={folder} index={index} />
          ))}
          {outerProvided.placeholder}
        </Styles.Wrapper>
      )}
    </Droppable>
  )
}

export default JobPostingFolderList
