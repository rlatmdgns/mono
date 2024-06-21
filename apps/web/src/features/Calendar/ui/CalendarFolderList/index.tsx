import { Folder } from '@/interface/sidebar'
import React from 'react'
import * as Styles from './styles'
import { CalendarFolder } from '../CalendarFolder'

interface CalendarFolderListProps {
  folders?: Folder[]
}

export const CalendarFolderList = ({ folders }: CalendarFolderListProps) => {
  return (
    <Styles.Wrapper>
      {folders?.map((folder) => {
        return (
          <CalendarFolder
            key={folder.folder_id}
            title={folder?.folder_name}
            postings={folder.postings}
          />
        )
      })}
    </Styles.Wrapper>
  )
}
