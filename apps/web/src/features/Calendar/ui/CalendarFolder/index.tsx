import { JobPosting } from '@/interface/jobPosting'
import React from 'react'
import * as Styles from './styles'
import { CalendarPostingList } from '../CalendarPostingList'

interface CalendarFolderProps {
  title?: string
  postings?: JobPosting[]
}

export const CalendarFolder = ({ title, postings }: CalendarFolderProps) => {
  const isEmptyPosting = !postings || postings?.length === 0
  if (isEmptyPosting) return null

  return (
    <Styles.Wrapper>
      <Styles.FolderTitle>{title}</Styles.FolderTitle>
      <CalendarPostingList postings={postings} />
    </Styles.Wrapper>
  )
}
