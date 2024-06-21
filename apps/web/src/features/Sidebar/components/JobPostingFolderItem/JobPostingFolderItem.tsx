'use client'

import { useState } from 'react'
import { openFoldersAtom } from '@/features/Sidebar/recoil'
import { useRecoilState } from 'recoil'
import { Folder } from '@/interface/sidebar'
import { Draggable } from 'react-beautiful-dnd'
import { useAuthority } from '@/shared/hooks'
import JobPostingList from '@/features/Sidebar/components/JobPostingList'
import FolderManagementDropdown from './components/FolderManagementDropdown'
import * as Styles from './styles'
import { Icon } from '@repo/ui'

interface JobPostingFolderItem {
  folder: Folder
  index: number
}

const JobPostingFolderItem = ({ folder, index }: JobPostingFolderItem) => {
  const { folder_id, folder_name } = folder

  const [openFolders, setOpenFolders] = useRecoilState(openFoldersAtom)
  const [isOvered, setIsOvered] = useState(false)

  const { authority } = useAuthority()
  const isEvaluationMember = authority === 'evaluationMember'

  const isIncluded = (id: string) => {
    return openFolders.some((folder) => folder === id)
  }

  const handleToggle = (id: string) => {
    if (!isIncluded(id)) return setOpenFolders([...openFolders, id])

    const filterFolders = openFolders.filter((folder) => folder !== id)
    setOpenFolders(filterFolders)
  }

  const handleMouseOver = () => setIsOvered(true)
  const handleMouseOut = () => setIsOvered(false)

  return (
    <Draggable draggableId={folder_id} index={index} isDragDisabled={isEvaluationMember}>
      {(draggableProvided) => (
        <Styles.Wrapper
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
        >
          <Styles.Title
            onClick={() => handleToggle(folder_id)}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <Styles.Left>
              <Styles.Arrow $isIncluded={isIncluded(folder.folder_id)}>
                <Icon icon="icon/down-solid" color="neutralGray400" />
              </Styles.Arrow>
              <Styles.Name>{folder_name}</Styles.Name>
            </Styles.Left>
            <FolderManagementDropdown
              folderId={folder.folder_id}
              folderName={folder.folder_name}
              isOvered={isOvered}
            />
          </Styles.Title>
          <JobPostingList folder={folder} isOpen={isIncluded(folder_id)} />
        </Styles.Wrapper>
      )}
    </Draggable>
  )
}

export default JobPostingFolderItem
