'use client'

import RecruitInfo from '@/app/[locale]/recruit/_components/RecruitInfo'
import React from 'react'
import * as Styles from './styles'

interface PostingTemplatePreviewProps {
  template: any
}

const PostingTemplatePreview = ({ template }: PostingTemplatePreviewProps) => {
  return (
    <Styles.Wrapper>
      <RecruitInfo recruit={template} isTemplate={true} />
    </Styles.Wrapper>
  )
}

export default PostingTemplatePreview
