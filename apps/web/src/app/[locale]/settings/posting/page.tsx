import SettingPostingContainer from '@/app/[locale]/settings/posting/_container/SettingPostingContainer'
import getServerPostings from '@/services/posting/getPostings/getServerPostings'
import React from 'react'

const settingPostingPage = async () => {
  const initialData = await getServerPostings()

  return <SettingPostingContainer initialData={initialData} />
}

export default settingPostingPage
