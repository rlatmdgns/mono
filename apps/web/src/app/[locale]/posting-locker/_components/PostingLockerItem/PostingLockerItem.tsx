'use client'

import { PostingMember } from '@/interface/posting'
import { PAGE } from '@/shared/constants'
import PostingLockerMember from '@/app/[locale]/posting-locker/_components/PostingLockerMember'
import { Button } from '@/shared/ui'
import Link from 'next/link'
import * as Styles from './styles'
import { useLocale, useTranslations } from 'next-intl'

interface PostingLockerItemProps {
  id: number
  title: string
  count: number
  isMember: boolean
  members: PostingMember[]
  adminMembers: PostingMember[]
  date: string
  closeDate: string
  onClick: (id: number) => void
  isDropdownActive: boolean
  onDropdownToggle: (id: number) => void
}

const PostingLockerItem = ({
  id,
  title,
  count,
  isMember,
  adminMembers,
  members,
  date,
  closeDate,
  onClick,
  isDropdownActive,
  onDropdownToggle,
}: PostingLockerItemProps) => {
  const $t = useTranslations('common')
  const currentLocale = useLocale()
  const isKorean = currentLocale === 'ko'
  if (!isMember) {
    return (
      <Styles.Wrapper>
        <Styles.Container>
          <Styles.Title>{title}</Styles.Title>
          <Styles.Count>
            {count}
            {isKorean ? '명' : ''}
          </Styles.Count>
          <Styles.Member>
            <PostingLockerMember
              members={[...adminMembers, ...members]}
              isDropdownActive={isDropdownActive}
              onDropdownToggle={onDropdownToggle}
            />
          </Styles.Member>
          <Styles.Date>{closeDate}</Styles.Date>
          <Styles.Date>{date}</Styles.Date>
          <Button
            type="button"
            iconSource="icon/return-solid"
            state="standard"
            text={$t('restore')}
            size="xs"
            width="87px"
            disabled={!isMember}
          />
        </Styles.Container>
      </Styles.Wrapper>
    )
  }

  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Link href={PAGE.POSTINGS_DETAIL(id)}>
          <Styles.Title>{title}</Styles.Title>
        </Link>
        <Styles.Count>
          {count}
          {isKorean ? '명' : ''}
        </Styles.Count>
        <Styles.Member>
          <PostingLockerMember
            members={[...adminMembers, ...members]}
            isDropdownActive={isDropdownActive}
            onDropdownToggle={onDropdownToggle}
          />
        </Styles.Member>
        <Styles.Date>{closeDate}</Styles.Date>
        <Styles.Date>{date}</Styles.Date>
        <Button
          type="button"
          state="standard"
          text={$t('restore')}
          size="xs"
          width="fit-content"
          onClick={() => onClick(id)}
          iconSource="icon/return-solid"
          disabled={!isMember}
        />
      </Styles.Container>
    </Styles.Wrapper>
  )
}

export default PostingLockerItem
