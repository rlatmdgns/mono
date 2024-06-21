import {
  folderOfFolder,
  folderOfNoneFolder,
  folderSort,
  noneFolderOfFolder,
  noneFolderPostingSort,
  postingSort,
} from '@/features/Sidebar/components/JobPostingContainer/JobPostingContainer.factory'
import JobPostingFolderList from '@/features/Sidebar/components/JobPostingFolderList'
import JobPostingNoneFolderList from '@/features/Sidebar/components/JobPostingNoneFolderList'

import useFolderSort from '@/features/Sidebar/hooks/useFolderSort'
import usePostingSort from '@/features/Sidebar/hooks/usePostingSort'
import { foldersAtom, noneFoldersAtom } from '@/features/Sidebar/recoil'
import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { useRecoilState } from 'recoil'
import * as Styles from './styles'

const JobPostingContainer = () => {
  const [folders, setFolders] = useRecoilState(foldersAtom)
  const [noneFolders, setNoneFolders] = useRecoilState(noneFoldersAtom)

  const { folderSortMutate } = useFolderSort()
  const { postingSortMutate } = usePostingSort()

  const isPostingEmpty = folders.length < 1 && noneFolders?.postings.length < 1

  const handleDefaultResult = (result: any) => {
    if (result.type !== 'DEFAULT') return false

    setFolders(folderSort(folders, result))
    folderSortMutate({
      folder_id: result.draggableId,
      to: `${result?.destination.index}`,
    })
    return true
  }

  const handlePostingResult = (result: any) => {
    if (result.type !== 'POSTING') {
      return false
    }

    const isNoneFolderPostingSort =
      result.source.droppableId === 'null' && result.destination.droppableId === 'null'

    postingSortMutate({
      posting_id: result.draggableId,
      to_folder: result.destination.droppableId,
      to_sort: result.destination.index,
    })

    if (isNoneFolderPostingSort) {
      setNoneFolders(noneFolderPostingSort(noneFolders, result))
      return true
    }

    const isFolderPostingSort =
      result.source.droppableId !== 'null' &&
      result.source.droppableId === result.destination.droppableId

    if (isFolderPostingSort) {
      setFolders(postingSort(folders, result))
      return true
    }

    const isNoneFolderOfFolderSort =
      result.source.droppableId !== 'null' && result.destination.droppableId === 'null'

    if (isNoneFolderOfFolderSort) {
      const { newFolders, newNoneFolders } = noneFolderOfFolder(folders, noneFolders, result)
      setFolders(newFolders)
      setNoneFolders(newNoneFolders)
      return true
    }

    const isFolderOfNoneFolderSort =
      result.source.droppableId === 'null' && result.destination.droppableId !== 'null'
    if (isFolderOfNoneFolderSort) {
      const { newFolders, newNoneFolders } = folderOfNoneFolder(folders, noneFolders, result)

      setFolders(newFolders)
      setNoneFolders(newNoneFolders)
      return true
    }

    if (result.source.droppableId !== result.destination.droppableId) {
      setFolders(folderOfFolder(folders, result))
      return true
    }

    return true
  }
  const handleDragEnd = (result: any) => {
    if (!result) return

    let handled = handleDefaultResult(result)
    if (handled) return
    handled = handlePostingResult(result)
    if (!handled) throw new Error('지원하지 않는 result 감시')
  }

  if (isPostingEmpty) {
    return <Styles.Empty />
  }
  return (
    <Styles.Wrapper>
      <DragDropContext onDragEnd={handleDragEnd}>
        <JobPostingFolderList folders={folders} />
        <JobPostingNoneFolderList folder={noneFolders} />
      </DragDropContext>
    </Styles.Wrapper>
  )
}

export default JobPostingContainer
