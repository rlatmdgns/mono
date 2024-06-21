'use client'

import { useAuthority } from '@/shared/hooks'
import { Posting, Toast } from '@/shared/ui'
import { AUTHORITY, PAGE } from '@/shared/constants'
import { JobPosting } from '@/interface/jobPosting'
import Link from 'next/link'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface PostingItemProps {
  id?: string
  jobPosting: JobPosting
  index: number
  isClosingPosting?: boolean
  isNonFolder?: boolean
}

const JobPostingItem = ({ id, jobPosting, index, isNonFolder }: PostingItemProps) => {
  const $t = useTranslations('messages')
  const { authority } = useAuthority()
  const isEvaluationMember = authority === 'evaluationMember'
  const isAccess = authority === AUTHORITY.ADMIN || jobPosting.posting_member

  const isCurrentPage = id === String(jobPosting.posting_id)

  const handleClick = () => {
    if (isAccess) return
    return Toast.error($t('no_access_announcements'))
  }

  return (
    <Draggable
      draggableId={`${jobPosting.posting_id}`}
      index={index}
      isDragDisabled={isEvaluationMember}
    >
      {(provided) => {
        return (
          <Styles.Wrapper
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            onClick={handleClick}
            $disabled={!isAccess}
          >
            <Link href={PAGE.POSTINGS_DETAIL(jobPosting.posting_id)} prefetch={false}>
              <Posting jobPosting={jobPosting} isSelect={isCurrentPage} isNonFolder={isNonFolder} />
            </Link>
          </Styles.Wrapper>
        )
      }}
    </Draggable>
  )
}

export default JobPostingItem
