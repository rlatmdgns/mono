'use client'

import React from 'react'
import { useRecoilState } from 'recoil'
import { applicantFilterAtom } from '@/app/[locale]/applicants/_recoil/atom'
import { SearchInput } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const ApplicantSearch = () => {
  const [filter, setFilter] = useRecoilState(applicantFilterAtom)

  const $t = useTranslations('talent_pool')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formElements = event.currentTarget.elements[0] as HTMLInputElement
    setFilter({
      ...filter,
      search: formElements.value,
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <SearchInput width="288px" placeholder={$t('search_placeholder')} />
    </form>
  )
}

export default ApplicantSearch
