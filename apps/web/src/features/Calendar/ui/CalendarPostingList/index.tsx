import { JobPosting } from '@/interface/jobPosting'
import React from 'react'
import * as Styles from './styles'
import { CalendarPosting } from '../CalendarPosting'

interface CalendarPostingListProps {
  postings?: JobPosting[]
}

export const CalendarPostingList = ({ postings }: CalendarPostingListProps) => {
  if (!postings) return null
  return (
    <Styles.List>
      {postings.map((posting) => {
        return <CalendarPosting key={posting.posting_id} posting={posting} />
      })}
    </Styles.List>
  )
}
