import { JobPosting } from '@/interface/jobPosting'
import { Folder } from '@/interface/sidebar'

export const folderSort = (folders: any, result: any) => {
  const newFolders = [...folders]
  const [reorderedFolder] = newFolders.splice(result.source.index, 1)
  newFolders.splice(result.destination.index, 0, reorderedFolder)

  return newFolders
}

export const postingSort = (folders: any, result: any) => {
  const [currentFolder] = folders.filter(
    (folder: any) => folder.folder_id === result.source.droppableId,
  )
  const postings = [...currentFolder.postings]
  const [reorderedPosting] = postings.splice(result.source.index, 1)
  postings.splice(result.destination.index, 0, reorderedPosting)

  return folders.map((folder: any) => {
    return folder.folder_id === result.source.droppableId ? { ...folder, postings } : folder
  })
}

export const folderOfFolder = (folders: any, result: any) => {
  const [currentFolder] = folders.filter(
    (folder: any) => folder.folder_id === result.source.droppableId,
  )
  const [destinationFolder] = folders.filter(
    (folder: any) => folder.folder_id === result.destination.droppableId,
  )
  const currentPostings = [...currentFolder.postings]
  const [reorderedPosting] = currentPostings.splice(result.source.index, 1)

  const destinationPostings = [...destinationFolder.postings]
  destinationPostings.splice(result.destination.index, 0, reorderedPosting)

  return folders.map((folder: any) => {
    if (folder.folder_id === result.source.droppableId) {
      return { ...folder, postings: currentPostings }
    }
    if (folder.folder_id === result.destination.droppableId) {
      return { ...folder, postings: destinationPostings }
    }
    return folder
  })
}

export const noneFolderOfFolder = (folders: any, noneFolders: any, result: any) => {
  const newNoneFoldersPosting = [...noneFolders.postings]

  const [currentFolder] = folders.filter(
    (folder: any) => folder.folder_id === result.source.droppableId,
  )

  const currentFolderPostings = [...currentFolder.postings]

  const [reorderedPosting] = currentFolderPostings.splice(result.source.index, 1)
  newNoneFoldersPosting.splice(result.destination.index, 0, reorderedPosting)

  const newFolders = folders.map((folder: any) => {
    if (folder.folder_id === result.source.droppableId) {
      return { ...folder, postings: currentFolderPostings }
    }
    return folder
  })

  return {
    newFolders,
    newNoneFolders: { ...noneFolders, postings: newNoneFoldersPosting },
  }
}

export const folderOfNoneFolder = (folders: any, noneFolders: any, result: any) => {
  const newNoneFoldersPosting = [...noneFolders.postings]
  const [reorderedPosting] = newNoneFoldersPosting.splice(result.source.index, 1)

  const [destinationFolder] = folders.filter(
    (folder: any) => folder.folder_id === result.destination.droppableId,
  )

  const destinationFolderPostings = [...destinationFolder.postings]
  destinationFolderPostings.splice(result.destination.index, 0, reorderedPosting)

  const newFolders = folders.map((folder: any) => {
    if (folder.folder_id === result.destination.droppableId) {
      return { ...folder, postings: destinationFolderPostings }
    }
    return folder
  })

  return {
    newFolders,
    newNoneFolders: { ...noneFolders, postings: newNoneFoldersPosting },
  }
}

export const noneFolderPostingSort = (noneFolders: any, result: any) => {
  const newPostings = [...noneFolders.postings]
  const [reorderedPosting] = newPostings.splice(result.source.index, 1)

  newPostings.splice(result.destination.index, 0, reorderedPosting)

  return {
    folder_id: 'null',
    postings: newPostings,
  }
}

export const filterAccessPosting = (isEvaluationMember: boolean, postings?: JobPosting[]) => {
  if (!postings) return []
  if (isEvaluationMember) {
    return postings.filter((posting) => posting.posting_member)
  }
  return postings
}

export const filterAccessFolder = (isEvaluationMember: boolean, folders: Folder[]) => {
  if (isEvaluationMember) {
    return folders.map((folder) => {
      return {
        ...folder,
        postings: filterAccessPosting(isEvaluationMember, folder?.postings),
      }
    })
  }
  return folders
}
