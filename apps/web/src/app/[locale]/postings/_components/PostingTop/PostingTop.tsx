'use client'

import React, { ChangeEvent } from 'react'
import { useSetRecoilState } from 'recoil'
import { searchAtom } from '@/app/[locale]/postings/_recoil'
import { SearchInput } from '@/shared/ui'
import ViewToggle from '@/app/[locale]/postings/_components/ViewToggle'
import PostingMenuDropDown from '@/app/[locale]/postings/_components/PostingMenuDropDown'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface PostingMenuProps {
  id: string
}

const PostingTop = ({ id }: PostingMenuProps) => {
  const setSearch = useSetRecoilState(searchAtom)
  const $t = useTranslations('announcement_detail')
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)

  return (
    <Styles.Wrapper>
      <Styles.Left>
        <SearchInput
          maxWidth="226px"
          placeholder={$t('search_placeholder')}
          onChange={handleSearch}
        />
        <PostingMenuDropDown id={id} />
      </Styles.Left>
      <ViewToggle />
    </Styles.Wrapper>
  )
}

export default PostingTop
