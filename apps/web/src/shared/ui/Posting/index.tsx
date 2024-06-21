'use client'

import { JobPosting } from '@/interface/jobPosting'
import React from 'react'
import * as Styles from './styles'
import { Icon } from '@repo/ui'

interface PostingProps {
  jobPosting: JobPosting
  isSelect?: boolean
  isNonFolder?: boolean
  isColor?: boolean
}

export const Posting = ({ jobPosting, isSelect, isNonFolder, isColor = false }: PostingProps) => {
  const isActive = jobPosting.activate_state
  const isClose = jobPosting.close_state

  return (
    <Styles.JobPostingItem $isActive={isActive} $isClose={isClose} $isCurrentPage={isSelect}>
      <Styles.Inner
        $isMember={jobPosting.posting_member}
        $isActive={isActive}
        $isClose={isClose}
        $isCurrentPage={isSelect}
        $isNonFolder={isNonFolder}
        $color={jobPosting.posting_color}
        $isColor={isColor}
      >
        <Styles.Title>{jobPosting.posting_title}</Styles.Title>
        {!jobPosting.posting_member && (
          <Styles.Lock>
            <Icon icon="icon/lock-solid" color="neutralGray300" size={14} />
          </Styles.Lock>
        )}
      </Styles.Inner>
    </Styles.JobPostingItem>
  )
}
