'use client'

import React from 'react'
import PostingStoreButton from '@/app/[locale]/postings/_components/PostingStoreButton'
import PostingReStoreButton from '@/app/[locale]/postings/_components/PostingReStoreButton'

interface SettingDropDownProps {
  id: number
  isStored: boolean
  handleClosedToggle: (status: boolean) => void
}

const SettingDisabledContent = ({ id, isStored, handleClosedToggle }: SettingDropDownProps) => {
  if (isStored) {
    return <PostingReStoreButton id={id} handleClosedToggle={handleClosedToggle} />
  }
  return <PostingStoreButton id={id} handleClosedToggle={handleClosedToggle} />
}

export default SettingDisabledContent
