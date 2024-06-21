import { postingIdAtom } from '../../model/atom'
import { Posting } from '@/shared/ui'
import { JobPosting } from '@/interface/jobPosting'
import React from 'react'
import { useRecoilState } from 'recoil'
import * as Styles from './styles'

interface CalendarPostingProps {
  posting: JobPosting
}

export const CalendarPosting = ({ posting }: CalendarPostingProps) => {
  const [postingId, setPostingId] = useRecoilState(postingIdAtom)
  const isSelected = postingId === posting.posting_id
  const handleScheduleIdSet = () => {
    if (!posting.posting_member) return
    setPostingId(posting.posting_id)
  }

  return (
    <Styles.Item onClick={handleScheduleIdSet}>
      <Posting jobPosting={posting} key={posting.posting_id} isSelect={isSelected} isColor />
    </Styles.Item>
  )
}
