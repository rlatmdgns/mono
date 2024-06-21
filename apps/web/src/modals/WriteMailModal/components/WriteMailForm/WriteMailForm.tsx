import { useInvitedPostings, useModal, useTemplateContent } from '@/shared/hooks'
import 'react-quill/dist/quill.snow.css'
import {
  ArrowToggle,
  Button,
  CheckBox,
  FileInput,
  Member,
  Select,
  SelectMemberOptionLabel,
} from '@/shared/ui'
import { MODAL } from '@/shared/constants'
import { MailComponent } from '@/interface/mail'
import useRequestDocuments from '@/modals/RequestDocumentModal/hooks/useRequestDocuments'
import DocumentList from '@/modals/WriteMailModal/components/DocumentList'
import {
  createCarbonCopyOptions,
  createRecipientOptions,
  createTemplateOptions,
} from '@/modals/WriteMailModal/components/WriteMailForm/WriteMailForm.factory'
import temporaryFile from '@/services/temporaryFile'
import { fileSizeValidation } from '@/shared/lib/utils'
import React, { useEffect, useState } from 'react'
import { Controller, FieldValues, useFormContext } from 'react-hook-form'
import * as Styles from './styles'
import { InnerEditor, MailEditor } from '@/features/Editor'
import { useTranslations } from 'next-intl'
import useTemplates from '@/app/[locale]/settings/template/_hooks/useTemplates'

interface WriteMailFormProps {
  postingId?: string
  mailData?: MailComponent
}

const WriteMailForm = ({ postingId, mailData }: WriteMailFormProps) => {
  const { openModal } = useModal()

  const [quillTitleText, setQuillTitleText] = useState('')
  const [quillContentText, setQuillContentText] = useState('')
  const { reset } = useRequestDocuments()
  const [isBlindCarbonCopy, setIsBlindCarbonCopy] = useState(false)
  const { watch, setValue } = useFormContext()
  const { control } = useFormContext()
  const $t = useTranslations()

  const { postingOptions } = useInvitedPostings()

  const { data: templates } = useTemplates({ template_type: 'mail' })

  const templateOptions = createTemplateOptions(templates)

  const { data: templateContentData } = useTemplateContent(watch('template')?.value)

  const memberOptions = createCarbonCopyOptions([
    ...(mailData?.admin_member || []),
    ...(mailData?.posting_member || []),
  ])
  const applicants = createRecipientOptions(mailData?.applicant_list)

  const handleBlindCarbonCopyToggle = () => setIsBlindCarbonCopy(!isBlindCarbonCopy)

  const handleDocumentRequest = () => openModal(MODAL.REQUEST_DOCUMENT)

  const handleTemplateChange = (option: FieldValues) => {
    if (!option.value) {
      setValue('template', '')
      return
    }
    setValue('template', option)
    setValue('title', option.label, { shouldValidate: true })
  }

  const handleRemoveFile = () => {
    setValue('file', null)
    setValue('attached_file_name', null)
    setValue('attached_file_url', null)
  }

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return

    const formData = new FormData()
    if (
      !fileSizeValidation({
        file: event.target.files[0],
      })
    )
      return
    formData.append('file', event.target.files[0])

    const result = await temporaryFile(formData)
    setValue('file', event.target.files)
    setValue('attached_file_name', event.target.files[0]?.name || '')
    setValue('attached_file_url', result.temporary.url)
  }

  const handleTitleChange = (value: string) => {
    setQuillTitleText(value)
    setValue('title', value, { shouldValidate: true })
  }

  const handleChange = (value: string) => {
    setQuillContentText(value)
    setValue('content', value)
  }

  useEffect(() => {
    if (!templateContentData) return
    const templateContent = templateContentData?.template_contents
    setQuillTitleText(templateContent.mail_subject || '')
    setValue('title', templateContent.mail_subject || '')
    setQuillContentText(templateContent.mail_contents || '')
    setValue('content', templateContent.mail_contents || '')
    return () => {
      setQuillTitleText('')
      setValue('title', '')
      setQuillContentText('')
      setValue('content', '')
    }
  }, [templateContentData])

  useEffect(() => {
    return () => {
      reset()
    }
  }, [])

  return (
    <Styles.Form>
      <Styles.Fieldset>
        <Styles.Column>
          <Styles.Label>{$t('common.template')}</Styles.Label>
          <Styles.Item>
            <Controller
              name="template"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  onChange={(value) => handleTemplateChange(value)}
                  options={[{ value: null, label: $t('common.not_selected') }, ...templateOptions]}
                  placeholder={$t('mail.template_placeholder')}
                />
              )}
            />
          </Styles.Item>
        </Styles.Column>
        <Styles.Column>
          <Styles.Label $isRequired>{$t('common.title')}</Styles.Label>
          <Styles.Item>
            <InnerEditor
              value={quillTitleText}
              onChange={(value) => handleTitleChange(value)}
              placeholder={$t('mail.mail_title_placeholder')}
            />
          </Styles.Item>
        </Styles.Column>
        {!postingId && (
          <Styles.Column>
            <Styles.Label $isRequired>{$t('common.announcement')}</Styles.Label>
            <Styles.Item>
              <Controller
                name="posting"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={postingOptions}
                    placeholder={$t('mail.announcement_placeholder')}
                    onChange={(event) => {
                      setValue('mail_to', null)
                      field.onChange(event)
                    }}
                  />
                )}
              />
            </Styles.Item>
          </Styles.Column>
        )}
        <Styles.Column>
          <Styles.Label $isRequired>{$t('mail.recipient')}</Styles.Label>
          <Styles.Item>
            <Controller
              name="mail_to"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  isMulti
                  defaultValue={watch('mail_to')}
                  options={applicants}
                  isNoDropdownIndicator
                  isSearchable
                  placeholder={$t('mail.recipient_placeholder')}
                  noOptionsMessage={$t('mail.no_applicants_found')}
                  closeMenuOnSelect={false}
                />
              )}
            />
          </Styles.Item>
        </Styles.Column>
        <Styles.Column>
          <Styles.Label>
            <Styles.CCButton type="button" onClick={handleBlindCarbonCopyToggle}>
              {$t('mail.cc')}
              <ArrowToggle
                icon="icon/down-solid"
                color="neutralGray500"
                expanded={isBlindCarbonCopy}
              />
            </Styles.CCButton>
          </Styles.Label>
          <Styles.Item>
            <Controller
              name="cc"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  isMulti
                  options={memberOptions}
                  Option={SelectMemberOptionLabel}
                  isSearchable
                  isNoDropdownIndicator
                  placeholder={$t('mail.member_placeholder')}
                  closeMenuOnSelect={false}
                  MultiValueLabel={(props) => {
                    return <Member name={props.data.label} image={props.data.image} />
                  }}
                />
              )}
            />
          </Styles.Item>
        </Styles.Column>
        {isBlindCarbonCopy && (
          <Styles.Column>
            <Styles.Label>{$t('mail.bcc')}</Styles.Label>
            <Styles.Item>
              <Controller
                name="bcc"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    isMulti
                    options={memberOptions}
                    Option={SelectMemberOptionLabel}
                    isSearchable
                    isNoDropdownIndicator
                    placeholder={$t('mail.member_placeholder')}
                    closeMenuOnSelect={false}
                    MultiValueLabel={(props) => {
                      return <Member name={props.data.label} image={props.data.image} />
                    }}
                  />
                )}
              />
            </Styles.Item>
          </Styles.Column>
        )}
        <Styles.Column>
          <Styles.Label>{$t('common.file_upload')}</Styles.Label>
          <Styles.Item>
            <FileInput
              files={watch('file')}
              placeholder={$t('common.file_upload_description', { maxSize: 15 })}
              onChange={handleFileUpload}
              onRemove={handleRemoveFile}
              accept="*"
            />
          </Styles.Item>
        </Styles.Column>
        <Styles.Column>
          <Styles.Label>{$t('mail.request_document')}</Styles.Label>
          <Styles.Item>
            <DocumentList />
            <Button
              text={$t('mail.request_document_btn')}
              style="fill-weak"
              size="xs"
              width="60px"
              onClick={handleDocumentRequest}
            />
          </Styles.Item>
        </Styles.Column>
      </Styles.Fieldset>
      <Styles.EditorBox>
        <MailEditor
          value={quillContentText}
          onChange={(value) => handleChange(value)}
          placeholder={$t('mail.mail_content_placeholder')}
        />
      </Styles.EditorBox>
      <Controller
        name="template_save"
        control={control}
        render={({ field }) => {
          return (
            <Styles.TemplateSave>
              <CheckBox size="sm" isChecked={field.value} {...field} />
              {$t('mail.save_mail_template')}
            </Styles.TemplateSave>
          )
        }}
      />
    </Styles.Form>
  )
}

export default WriteMailForm
