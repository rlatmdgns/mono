'use client'

import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { PostingResponse } from '@/interface/posting'
import { postingRequestFileAtom } from '@/app/[locale]/postings/_recoil'
import usePosting from '@/app/[locale]/postings/_hooks/usePosting'
import * as Styles from './styles'
import PostingHeaderMenu from '@/app/[locale]/postings/_components/PostingHeaderMenu'
import { Badge } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface PostingHeaderProps {
  initialPosting: PostingResponse
  postingId: string
}

const PostingHeader = ({ initialPosting, postingId }: PostingHeaderProps) => {
  const { data } = usePosting(postingId, initialPosting)
  const id = data?.posting?.posting_id
  const title = data?.posting?.posting_title
  const members = data?.posting?.posting_member
  const isActive = data?.posting?.activate_state
  const isClose = data?.posting?.close_state
  const url = data.enterprise.enterprise_recruit_url
  const isStored = data?.posting?.hidden_state
  const isReApplyBlocked = data?.posting?.can_re_apply
  const isMultipleApplyBlocked = data?.posting?.can_multiple_apply
  const isDuplicateApplyBlocked = data?.posting?.can_duplicate_apply
  const hasApplicationForm = data?.posting?.posting_applicant_form

  const $t = useTranslations('common')
  const setRequestFile = useSetRecoilState(postingRequestFileAtom)

  /*임시 recoil 저장 추후 API 별도 요청*/
  useEffect(() => {
    setRequestFile(data?.posting?.posting_request_file)
  }, [data])

  return (
    <Styles.PostingHeader>
      <Styles.Inner>
        <Styles.Left>
          <Styles.Title>{title}</Styles.Title>
          <Badge
            text={isActive ? $t('activate') : $t('deactivate')}
            type={isActive ? 'standard' : 'gray'}
          />
        </Styles.Left>
        <PostingHeaderMenu
          url={url}
          id={id}
          title={title}
          isClose={isClose}
          isActive={isActive}
          isStored={isStored}
          isReApplyBlocked={isReApplyBlocked}
          isMultipleApplyBlocked={isMultipleApplyBlocked}
          isDuplicateApplyBlocked={isDuplicateApplyBlocked}
          hasApplicationForm={hasApplicationForm}
          members={members}
          adminMembers={data?.enterprise.admin_member}
        />
      </Styles.Inner>
    </Styles.PostingHeader>
  )
}

export default PostingHeader
