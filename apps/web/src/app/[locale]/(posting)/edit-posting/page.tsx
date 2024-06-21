import EditPostingContainer from '@/app/[locale]/(posting)/edit-posting/_container/EditPostingContainer/EditPostingContainer'
import { API_URL } from '@/shared/constants'
import { serverHttp } from '@/shared/lib/serverHttp'
import React from 'react'
import getServerFolders from '@/services/getFolders/getServerFolders'

interface EditPostingPageProps {
  searchParams: {
    id: string
  }
}

const EditPostingPage = async ({ searchParams }: EditPostingPageProps) => {
  const result = await getPosting(searchParams.id)
  const initFolderData = await getServerFolders()

  const initialData = {
    ...result.posting,
    close_state: result.posting.close_state,
    activate_state: result.posting.activate_state,
    hidden_state: result.posting.hidden_state,
    isDeadline: !!result.posting.posting_date,
    enterprise_explanation: result.enterprise.enterprise_explanation,
  }

  return (
    <EditPostingContainer
      id={searchParams.id}
      initialData={initialData}
      initFolderData={initFolderData}
    />
  )
}

const getPosting = (id: string) => {
  return serverHttp.get<any>(API_URL.POSTING(id))
}

export default EditPostingPage
