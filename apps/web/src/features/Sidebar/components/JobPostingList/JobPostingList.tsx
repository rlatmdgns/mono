'use client'

import JobPostingItem from '@/features/Sidebar/components/JobPostingItem'
import { Folder } from '@/interface/sidebar'
import { useParams } from 'next/navigation'
import { Droppable } from 'react-beautiful-dnd'
import * as Styles from './styles'

interface JonPostingListProps {
  isOpen?: boolean
  folder: Folder
  isNonFolder?: boolean
}

const JobPostingList = ({ isOpen, folder, isNonFolder }: JonPostingListProps) => {
  const pathname = useParams()
  const id = pathname?.id as string

  if (!isOpen) {
    return (
      <Droppable droppableId={folder.folder_id} type="POSTING">
        {(innerProvided, snapshot) => {
          return (
            <Styles.Wrapper
              $isDraggingOver={snapshot.isDraggingOver}
              ref={innerProvided.innerRef}
              {...innerProvided.droppableProps}
              className={snapshot.isDraggingOver ? '' : 'no-dragging'}
            >
              {folder?.postings?.map((jonPosting, index) => (
                <JobPostingItem
                  key={jonPosting.posting_id}
                  index={index}
                  jobPosting={jonPosting}
                  id={id}
                  isNonFolder={isNonFolder}
                />
              ))}
              {innerProvided.placeholder}
            </Styles.Wrapper>
          )
        }}
      </Droppable>
    )
  }
  return (
    <Droppable droppableId={folder.folder_id} type="POSTING">
      {(innerProvided, snapshot) => {
        return (
          <Styles.Wrapper
            $isDraggingOver={snapshot.isDraggingOver}
            ref={innerProvided.innerRef}
            {...innerProvided.droppableProps}
          >
            {folder?.postings?.map((jonPosting, index) => (
              <JobPostingItem
                key={jonPosting.posting_id}
                index={index}
                jobPosting={jonPosting}
                id={id}
              />
            ))}
            {innerProvided.placeholder}
          </Styles.Wrapper>
        )
      }}
    </Droppable>
  )
}

export default JobPostingList
