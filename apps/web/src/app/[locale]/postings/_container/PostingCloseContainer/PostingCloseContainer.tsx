import React from 'react'
import PostingOpenButton from '@/app/[locale]/postings/_components/PostingOpenButton'
import PostingCloseButton from '@/app/[locale]/postings/_components/PostingCloseButton'
import { withAuth } from '@/shared/lib'

interface PostingCloseContainerProps {
  id: number
  isClose: boolean
  handleClosedToggle: (status: boolean) => void
}

const PostingCloseContainer = ({ id, isClose, handleClosedToggle }: PostingCloseContainerProps) => {
  if (isClose) {
    return <PostingOpenButton id={id} handleClosedToggle={handleClosedToggle} />
  }
  return <PostingCloseButton id={id} handleClosedToggle={handleClosedToggle} />
}

export default withAuth(PostingCloseContainer)
