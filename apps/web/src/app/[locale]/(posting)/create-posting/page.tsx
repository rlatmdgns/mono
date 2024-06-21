import { getServerPostingRequirement } from '@/services/posting/getPostingRequirement/getServerPostingRequirement'
import React from 'react'
import CreatePostingContainer from '@/app/[locale]/(posting)/create-posting/_container/CreatePostingContainer'
import getServerFolders from '@/services/getFolders/getServerFolders'

const CreatePostingPage = async () => {
  const initialData = await getServerPostingRequirement()
  const initFolderData = await getServerFolders()
  return <CreatePostingContainer initialData={initialData} initFolderData={initFolderData} />
}

export default CreatePostingPage
