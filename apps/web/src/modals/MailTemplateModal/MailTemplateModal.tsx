import React, { useEffect } from 'react'
import * as Styles from './styles'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import { Button, IconButton, ModalLayout } from '@/shared/ui'
import MailTemplatePreview from '@/modals/MailTemplateModal/_components/MailTemplatePreview'
import MailTemplateField from '@/modals/MailTemplateModal/_components/MailTemplateField'
import { useTemplateContent } from '@/shared/hooks'
import { useTranslations } from 'next-intl'

interface MailTemplateModalProps {
  readonly onClose: () => void
  readonly title: string
  readonly onSubmit: (data: any) => void
  readonly id?: number
}

const MailTemplateModal = ({ onClose, title, onSubmit, id }: MailTemplateModalProps) => {
  const { data } = useTemplateContent(id)
  const method = useForm()
  const $t = useTranslations('common')

  const handleSubmit = (values: FieldValues) => {
    const payload = {
      template_title: values.template_title,
      template_contents: {
        mail_subject: values.mail_subject,
        mail_contents: values.mail_contents,
      },
    }
    onSubmit(payload)
    onClose()
  }
  useEffect(() => {
    method.reset({
      ...data?.template_contents,
      template_title: data?.template_title,
    })
  }, [data])

  return (
    <ModalLayout isDimmed>
      <FormProvider {...method}>
        <Styles.Form onSubmit={method.handleSubmit(handleSubmit)}>
          <Styles.Header>
            {title}
            <IconButton icon="icon/cancle-line1" onClick={onClose} />
          </Styles.Header>
          <Styles.Inner>
            <MailTemplateField template={data?.template_contents} />
            <MailTemplatePreview />
          </Styles.Inner>
          <Styles.Footer>
            <Button
              size="sm"
              width="50px"
              text={$t('cancel')}
              style="mono"
              state="standard"
              onClick={onClose}
            />
            <Button type="submit" size="sm" width="72px" text={id ? $t('modify') : $t('save')} />
          </Styles.Footer>
        </Styles.Form>
      </FormProvider>
    </ModalLayout>
  )
}

export default MailTemplateModal
