'use client'
import React, { useEffect } from 'react'
import * as Styles from './styles'
import MailDetailHeader from '@/app/[locale]/mail/_components/MailDetailHeader'
import useMailDetail from '@/app/[locale]/mail/_hooks/useMailDetail'
import { MailDetailResponse } from '@/interface/mail'
import MailDetailContent from '@/app/[locale]/mail/_components/MailDetailContent'
import useMailRead from '@/app/[locale]/mail/_hooks/useMailRead'

interface MailContainerProps {
  id?: string
  initialDetailData?: MailDetailResponse
}

const MailDetailContainer = ({ id, initialDetailData }: MailContainerProps) => {
  const { readUpdate } = useMailRead(id)

  const { data } = useMailDetail(id, initialDetailData)

  const sender = data?.mail_detail.mail_from
  const recipients = data?.mail_detail.mail_to
  const carbonCopy = data?.mail_detail.mail_cc
  const blindCarbonCopy = data?.mail_detail.mail_bcc

  useEffect(() => {
    readUpdate()
  }, [data])

  if (!id) {
    return null
  }
  return (
    <Styles.Wrapper>
      <MailDetailHeader
        title={data?.mail_detail.mail_subject}
        sender={sender}
        recipients={recipients}
        carbonCopy={carbonCopy}
        blindCarbonCopy={blindCarbonCopy}
      />
      <MailDetailContent content={data?.mail_detail?.mail_body} />
    </Styles.Wrapper>
  )
}

export default MailDetailContainer
