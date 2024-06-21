'use client'

import * as Styles from './styles'
import { Controller, FieldValues, useForm } from 'react-hook-form'
import { Select, Toast } from '@/shared/ui'
import React, { useState } from 'react'
import { CREATE_APPLICANT_TAG_FORM_SELECT_STYLES } from '@/modals/ApplicantModal/ApplicantModal.constants'
import { getCreateApplicantTagOptions } from '@/modals/ApplicantModal/ApplicantModal.factory'
import { useTranslations } from 'next-intl'

interface AddTagFormProps {
  onSubmit: (tag: FieldValues) => void
  tags?: string[]
  applicantTags?: string[]
}

const AddTagForm = ({ onSubmit, tags, applicantTags }: AddTagFormProps) => {
  const $t = useTranslations()
  const { handleSubmit, control } = useForm()
  const [searchValue, setSearchValue] = useState('')

  const tagOptions = getCreateApplicantTagOptions(searchValue, tags)

  const handleSubmitForm = (onChange: (value: string) => void, value: string) => {
    const isMaxTag = applicantTags && applicantTags?.length >= 8
    const hasTag = applicantTags?.some((tag) => tag === value)

    if (!value) return
    if (isMaxTag) {
      return Toast.error($t('messages.tag_creation_limit'))
    }
    if (hasTag) {
      return Toast.error($t('messages.tag_already_added'))
    }
    if (value.length > 10) {
      return Toast.error($t('messages.tag_character_limit'))
    }
    onChange(value)
    onSubmit({ tag: value })
  }

  return (
    <Styles.Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="applicant_tag"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange } }) => (
          <Select
            value={null}
            options={tagOptions}
            placeholder={`+ ${$t('common.add_tag')}`}
            onChange={(option) => handleSubmitForm(onChange, option.value)}
            onInputChange={(value) => setSearchValue(value)}
            styles={CREATE_APPLICANT_TAG_FORM_SELECT_STYLES}
            isNoDropdownIndicator
            isSearchable
          />
        )}
      />
    </Styles.Form>
  )
}

export default AddTagForm
