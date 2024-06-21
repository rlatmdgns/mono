'use client'

import React, { useDeferredValue, useEffect, useState } from 'react'
import * as Styles from './styles'
import MailHeader from '@/app/[locale]/mail/_components/MailHeader'
import MailList from '@/app/[locale]/mail/_components/MailList'
import useMails from '@/app/[locale]/mail/_hooks/useMails'
import { Pagination } from '@/shared/ui'
import { PAGE } from '@/shared/constants'
import { useMailContainerConstants } from '@/app/[locale]/mail/_container/MailContainer/hooks/useMailContainerConstants'
import { MailsResponse, MailType } from '@/interface/mail'

interface MailContainerProps {
  type: MailType
  id?: string
  page?: string
  initialData: MailsResponse
}

const MailContainer = ({ type, id, page = '1', initialData }: MailContainerProps) => {
  const [search, setSearch] = useState('')
  const deferredQuery = useDeferredValue(search)
  const currentPage = Number(page)

  const { data: mailData, refetch } = useMails(initialData, {
    search,
    type,
    page: currentPage,
    size: 14,
  })

  const mails = mailData?.mail_list?.data
  const totalPage = mailData?.mail_list?.last_page
  const { TITLE } = useMailContainerConstants()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formElements = event.currentTarget.elements[0] as HTMLInputElement
    setSearch(formElements.value)
  }

  useEffect(() => {
    refetch()
  }, [currentPage, type, deferredQuery])

  useEffect(() => {
    return () => {
      setSearch('')
    }
  }, [])

  return (
    <Styles.Wrapper>
      <MailHeader title={TITLE[type]} type={type} onSubmit={handleSubmit} />
      <Styles.MailListWrapper>
        <MailList id={id} mails={mails} type={type} />
        <Pagination
          href={`${PAGE.MAIL}/${type}`}
          currentPage={currentPage}
          limit={5}
          totalPage={totalPage}
        />
      </Styles.MailListWrapper>
    </Styles.Wrapper>
  )
}

export default MailContainer
