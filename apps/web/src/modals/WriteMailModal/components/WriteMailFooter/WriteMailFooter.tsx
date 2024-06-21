import { Button, Toast } from '@/shared/ui'
import useRequestDocuments from '@/modals/RequestDocumentModal/hooks/useRequestDocuments'
import { RequestDocument } from '@/modals/RequestDocumentModal/recoil/atom'
import sendMail from '@/services/mail/sendMail'
import React, { useEffect } from 'react'
import { FieldValues, useFormContext } from 'react-hook-form'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface WriteMailFooterProps {
  postingId?: string
  onClick: () => void
}

const WriteMailFooter = ({ postingId, onClick }: WriteMailFooterProps) => {
  const { documents, reset } = useRequestDocuments()
  const {
    handleSubmit,
    formState: { isValid },
  } = useFormContext()

  const $t = useTranslations()

  const element = document.getElementById('inner-editor')
  const mailSubjectText = element?.innerText

  const createValues = (arr: any) => arr?.map((item: any) => item.value)
  const createDocuments = () => {
    if (!documents) return
    return documents?.map((document: RequestDocument) => {
      return {
        file_title: document?.name,
        file_notice: document?.value,
      }
    })
  }

  const handleFormSubmit = async (values: FieldValues) => {
    const id = postingId || values.posting?.value

    const payload = {
      mail_subject: mailSubjectText?.trim() || '',
      mail_subject_html: values.title,
      mail_to: createValues(values.mail_to),
      cc: createValues(values.cc),
      bcc: createValues(values.bcc),
      mail_contents: values.content,
      attached_file_name: values.attached_file_name,
      attached_file_url: values.attached_file_url,
      template_save: values?.template_save,
      request_file: createDocuments(),
    }
    try {
      await sendMail(id, payload)
      onClick()
      return Toast.success($t('messages.mail_send_success'))
    } catch (e) {
      return Toast.error('messages.mail_send_fail')
    }
  }

  useEffect(() => {
    return () => {
      reset()
    }
  }, [])

  return (
    <Styles.Footer>
      <Button
        text={$t('mail.send_mail')}
        width="115px"
        disabled={!isValid}
        onClick={handleSubmit(handleFormSubmit)}
      />
    </Styles.Footer>
  )
}

export default WriteMailFooter
