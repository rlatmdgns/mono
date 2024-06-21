import * as Styles from './styles'

import { PAGE } from '@/shared/constants'
import { AvatarMultiple, Dropdown, MemberList, Toast } from '@/shared/ui'
import { Icon } from '@repo/ui'

import { PostingMember } from '@/interface/posting'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { getDayFormat } from '@/shared/lib/utils'
import dayjs from 'dayjs'

interface PostingItemProps {
  id: number
  title: string
  field: string
  createdAt: string
  dueDate?: string
  members: PostingMember[]
  total: number
  passCount: number
  failCount: number
  isAccess: boolean
  closeState: boolean
  activateState: boolean
}

const PostingItem = ({
  id,
  title,
  field,
  createdAt,
  dueDate,
  members,
  total,
  passCount,
  failCount,
  isAccess,
  closeState,
  activateState,
}: PostingItemProps) => {
  const $t = useTranslations()
  const currentLocale = useLocale()
  const isKorean = currentLocale === 'ko'
  const router = useRouter()

  const createdAtToUSe = createdAt ? getDayFormat(dayjs(createdAt).toDate(), 'YY.MM.DD') : '-'
  const dueDateToUse = dueDate ? getDayFormat(dayjs(dueDate).toDate(), 'YY.MM.DD') : '-'

  const failCountToUse = failCount === 0 ? '-' : `${failCount} ${isKorean ? '명' : ''}`
  const passCountToUse = passCount === 0 ? '-' : `${passCount} ${isKorean ? '명' : ''}`

  const handleClick = () => {
    if (!isAccess) {
      return Toast.error($t('messages.no_access_announcements'))
    }
    router.push(PAGE.POSTINGS_DETAIL(id))
  }

  return (
    <Styles.Item onClick={handleClick} $isClose={closeState}>
      <Styles.TitleBox $isActivate={activateState}>
        <Styles.Title $isClose={closeState}>{title}</Styles.Title>
        {!isAccess && <Icon icon="icon/lock-solid" color="neutralGray300" />}
      </Styles.TitleBox>
      <Styles.Field>{field}</Styles.Field>
      <Styles.Date>{createdAtToUSe}</Styles.Date>
      <Styles.Date>{dueDateToUse}</Styles.Date>
      <Styles.Member>
        <Dropdown direction="left" button={<AvatarMultiple members={members} />}>
          <MemberList members={members} />
        </Dropdown>
      </Styles.Member>
      <Styles.Count>
        {total} {isKorean && '명'}
      </Styles.Count>
      <Styles.Count>{failCountToUse}</Styles.Count>
      <Styles.Count>{passCountToUse}</Styles.Count>
    </Styles.Item>
  )
}

export default PostingItem
