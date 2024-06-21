import React from 'react'
import { notFound } from 'next/navigation'
import { MailType } from '@/interface/mail'
import MailContainer from '@/app/[locale]/mail/_container/MailContainer'
import getServerMails from '@/services/mail/getMails/getServerMails'
import getServerMailDetail from '@/services/mail/getMailDetail/getServerMailDetail'
import MailDetailContainer from '@/app/[locale]/mail/_container/MailDetailConatiner'

interface MailPageProps {
  params: {
    type: MailType
  }
  searchParams: {
    id?: string
    page?: string
  }
}

const MailPage = async ({ params, searchParams }: MailPageProps) => {
  const type = {
    in: true,
    sent: true,
    trash: true,
  }
  if (!type[params.type]) {
    return notFound()
  }

  const id = searchParams?.id
  const page = searchParams?.page

  const initialData = await getServerMails(params.type, page)
  const initialDetailData = await getServerMailDetail(id)
  return (
    <>
      <MailContainer type={params.type} id={id} page={page} initialData={initialData} />
      <MailDetailContainer id={id} initialDetailData={initialDetailData} />
    </>
  )
}

export default MailPage
