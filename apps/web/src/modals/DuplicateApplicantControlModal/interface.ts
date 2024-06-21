import React from 'react'

export interface PostingBlocking {
  [key: string]: boolean
}

export interface BlockingTypes {
  [key: string]: string
}

export interface DuplicateApplicantsControlItem {
  title: string
  description: string | React.ReactNode
  type: 'can_re_apply' | 'can_multiple_apply' | 'can_duplicate_apply'
}
