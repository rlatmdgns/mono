'use client'

import PostingLockerHeader from '@/app/[locale]/posting-locker/_components/PostingLockerHeader'
import PostingLockerList from '@/app/[locale]/posting-locker/_components/PostingLockerList'
import usePostingLocker from '@/app/[locale]/posting-locker/_hooks/usePostingLocker'
import { Header, SearchInput } from '@/shared/ui'
import { PostingMember } from '@/interface/posting'
import { PostingLocker } from '@/interface/postingLocker'
import React, { useEffect, useMemo, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useTranslations } from 'next-intl'

interface PostingLockerContainerProps {
  initialData: PostingLocker
  adminMembers: PostingMember[]
}

const PostingLockerContainer = ({ initialData, adminMembers }: PostingLockerContainerProps) => {
  const $t = useTranslations()
  const { ref, inView } = useInView()
  const [search, setSearch] = useState('')

  const { data, hasNextPage, fetchNextPage, refetch } = usePostingLocker(initialData, search)

  const postings = useMemo(
    () => (data ? data.pages.flatMap(({ data }) => data) : []),
    [data, search],
  )

  const fetchMore = () => {
    if (!inView) {
      return
    }
    void fetchNextPage()
  }

  useEffect(() => {
    fetchMore()
  }, [inView, hasNextPage])

  useEffect(() => {
    refetch()
  }, [search])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formElements = event.currentTarget.elements[0] as HTMLInputElement
    setSearch(formElements.value)
  }

  return (
    <>
      <Header title={$t('page.storage')} description={$t('storage.description')}>
        <form onSubmit={handleSubmit}>
          <SearchInput maxWidth="268px" placeholder={$t('storage.search_placeholder')} />
        </form>
      </Header>
      <PostingLockerHeader />
      <PostingLockerList postings={postings} adminMembers={adminMembers} inViewRef={ref} />
    </>
  )
}

export default PostingLockerContainer
