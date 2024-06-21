'use client'

import Career from '@/app/[locale]/(posting)/_components/Career/Career'
import { useCreateFolder, useModal } from '@/shared/hooks'
import { Folder } from '@/interface/sidebar'
import { setHours, setMinutes } from 'date-fns'
import { enUS, ko } from 'date-fns/locale'
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import { Controller, useFormContext } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'
import * as Styles from './styles'
import { Template } from '@/interface/template'
import { templateIdAtom } from '@/app/[locale]/(posting)/create-posting/_recoil'
import {
  CheckBox,
  ErrorMessage,
  LocationSelect,
  Select,
  Switch,
  TextInput,
  Toast,
} from '@/shared/ui'
import { useLocale, useTranslations } from 'next-intl'
import { Icon } from '@repo/ui'
import { useCreatePostingFieldConstants } from '@/app/[locale]/(posting)/_components/CreatePostingField/hooks/useCreatePostingFieldConstants'
import { useCreatePostingFieldFactory } from '@/app/[locale]/(posting)/_components/CreatePostingField/hooks/useCreatePostingFieldFactory'

interface CreatePostingFieldProps {
  folders?: Folder[]
  templates?: Template[]
  isTemplate?: boolean
  isEdit?: boolean
  hasApplication?: boolean
  isCreateFolder?: boolean
  handleUpdateIsCreateFolder?: (status: boolean) => void
}

const CreatePostingField = ({
  folders,
  templates,
  isTemplate = false,
  isEdit = false,
  hasApplication = false,
  isCreateFolder,
  handleUpdateIsCreateFolder,
}: CreatePostingFieldProps) => {
  const setId = useSetRecoilState(templateIdAtom)

  const { openModal, closeModal } = useModal()
  const { createFolderMutate } = useCreateFolder()
  const currentLocale = useLocale()
  const datePickerLocale = currentLocale === 'ko' ? ko : enUS
  const $t = useTranslations()

  const { FIELD_OF_EMPLOYMENT } = useCreatePostingFieldConstants()
  const { createFolderOptions } = useCreatePostingFieldFactory()
  const folderOptions = createFolderOptions(folders)

  const [isAutoClose, setIsAutoClose] = useState(false)
  const hasPostingActiveController = !!isEdit && !!hasApplication

  const handleChangeAutoClose = (status: boolean) => {
    setIsAutoClose(status)
  }

  const {
    register,
    formState: { errors },
    watch,
    control,
    setValue,
  } = useFormContext()

  const currentFolder = folderOptions.find((option) => option.value === watch('folder_id')?.value)

  const handleFolderCreate = (name: string) => {
    if (!name) {
      return Toast.error($t('create_folder_button.placeholder'))
    }
    createFolderMutate(name)
    closeModal('inputModal')
    setValue('folder_id', folderOptions[0])
    handleUpdateIsCreateFolder && handleUpdateIsCreateFolder(true)
  }

  const handleTemplateChange = (id: string) => {
    setId(id)
  }

  useEffect(() => {
    const isCreateFolder = watch('folder_id')?.label === $t('create_folder_button.title')
    if (!isCreateFolder) return
    openModal('inputModal', {
      title: $t('create_folder_button.title'),
      subtitle: $t('folder.name'),
      placeholder: $t('create_folder_button.placeholder'),
      textSubmit: $t('common.save'),
      onSubmit: handleFolderCreate,
    })
  }, [watch('folder_id')])

  useEffect(() => {
    if (!isCreateFolder || !folders) return
    const recentFolder = folderOptions[folderOptions.length - 2]
    setValue('folder_id', recentFolder)
  }, [isCreateFolder, folders])

  return (
    <Styles.Field>
      <Styles.Legend>{$t('common.announcement_information')}</Styles.Legend>
      {isTemplate && (
        <Styles.Column>
          <Styles.Text $isRequired>{$t('common.template_name')}</Styles.Text>
          <TextInput
            register={register('template_title', {
              required: $t('validation.template_input_required_message'),
              maxLength: {
                value: 50,
                message: $t('validation.template_input_message'),
              },
            })}
            placeholder={$t('validation.template_input_placeholder')}
            width="100%"
          />
          <ErrorMessage error={errors?.template_title} />
        </Styles.Column>
      )}
      {templates && (
        <Styles.Column>
          <Styles.Text>{$t('create_announcement.template')}</Styles.Text>
          <Select
            options={[{ value: null, label: $t('common.not_selected') }, ...templates]}
            placeholder={$t('create_announcement.select_template')}
            onChange={(options) => {
              handleTemplateChange(options.template_id)
            }}
          />
        </Styles.Column>
      )}
      <Styles.Column>
        <Styles.Text $isRequired>{$t('create_announcement.title')}</Styles.Text>
        <Styles.TitleItem $isTemplate={isTemplate}>
          {!isTemplate && (
            <Controller
              render={({ field }) => (
                <Select
                  options={folderOptions}
                  placeholder={$t('create_announcement.announcement_folder')}
                  value={currentFolder ? currentFolder : field.value}
                  onChange={field.onChange}
                />
              )}
              name={'folder_id'}
              control={control}
            />
          )}
          <div>
            <TextInput
              register={register('posting_title', {
                required: $t('create_announcement.title_placeholder'),
                maxLength: {
                  value: 50,
                  message: $t('create_announcement.title_length_description'),
                },
              })}
              placeholder={$t('create_announcement.title_placeholder')}
              width="100%"
              state={errors?.posting_title ? 'error' : 'success'}
            />
            <ErrorMessage error={errors?.posting_title} />
          </div>
        </Styles.TitleItem>
      </Styles.Column>
      <Styles.Column>
        <Styles.Text $isRequired>{$t('create_announcement.announcement')}</Styles.Text>
        <Styles.TextArea
          placeholder={$t('create_announcement.announcement_placeholder')}
          {...register('enterprise_explanation', {
            required: true,
          })}
        />
      </Styles.Column>
      <Styles.Column>
        <Styles.Text $isRequired>{$t('create_announcement.position')}</Styles.Text>
        <TextInput
          register={register('posting_position', {
            required: true,
            maxLength: {
              value: 300,
              message: $t('create_announcement.position_length_description'),
            },
          })}
          placeholder={$t('create_announcement.position_placeholder')}
          width="100%"
          state={errors?.posting_position ? 'error' : 'success'}
        />
        <ErrorMessage error={errors?.posting_position} />
      </Styles.Column>
      <Styles.Column>
        <Styles.Text $isRequired>{$t('create_announcement.recruitment')}</Styles.Text>
        <Controller
          render={({ field }) => (
            <Select
              options={FIELD_OF_EMPLOYMENT}
              placeholder={$t('create_announcement.recruitment_placeholder')}
              value={field.value}
              onChange={field.onChange}
            />
          )}
          control={control}
          name="posting_field"
        />
      </Styles.Column>
      <Styles.Column>
        <Styles.Text $isRequired>{$t('create_announcement.career_condition')}</Styles.Text>
        <Career />
      </Styles.Column>
      <Styles.Column>
        <Styles.Text $isRequired>{$t('create_announcement.responsibilities')}</Styles.Text>
        <Styles.TextArea
          placeholder={$t('create_announcement.work_placeholder')}
          {...register('posting_work_info', {
            required: true,
          })}
        />
      </Styles.Column>
      <Styles.Column>
        <Styles.Text $isRequired>{$t('create_announcement.qualification')}</Styles.Text>
        <Styles.TextArea
          placeholder={$t('create_announcement.qualification_placeholder')}
          {...register('posting_qualification', {
            required: true,
          })}
        />
      </Styles.Column>
      <Styles.Column>
        <Styles.Text>{$t('create_announcement.preferential')}</Styles.Text>
        <Styles.TextArea
          placeholder={$t('create_announcement.preferential_placeholder')}
          {...register('posting_advantage')}
        />
      </Styles.Column>
      <Styles.Column>
        <Styles.Text>{$t('create_announcement.benefit_welfare')}</Styles.Text>
        <Styles.TextArea
          placeholder={$t('create_announcement.benefit_welfare_placeholder')}
          {...register('posting_benefits_welfare')}
        />
      </Styles.Column>
      {!isTemplate && (
        <Styles.Column>
          <Styles.Deadline>
            {$t('create_announcement.designation_announcement_deadline')}
            <Controller
              name="isDeadline"
              control={control}
              render={({ field }) => {
                return <Switch isChecked={field.value} onChange={field.onChange} size="xs" />
              }}
            />
          </Styles.Deadline>
          {watch('isDeadline') && (
            <Styles.DataPickerWrapper>
              <Controller
                name="date"
                control={control}
                render={({ field: { value, onChange } }) => {
                  return (
                    <DatePicker
                      className="react-datepicker"
                      dateFormat="YYYY-MM-dd"
                      dateFormatCalendar={$t('date_format.calendar')}
                      locale={datePickerLocale}
                      placeholderText={$t(
                        'create_announcement.designation_announcement_deadline_placeholder',
                      )}
                      selected={value}
                      onChange={(data) => {
                        onChange(data)
                      }}
                      onKeyDown={(e) => {
                        e.preventDefault()
                      }}
                      minDate={new Date()}
                      icon={<Icon icon="icon/calendar-solid" size={16} color="neutralGray500" />}
                      previousMonthButtonLabel={
                        <Icon icon="icon/left-line" size={16} color="neutralGray500" />
                      }
                      nextMonthButtonLabel={
                        <Icon icon="icon/right-line" size={16} color="neutralGray500" />
                      }
                      showIcon
                    />
                  )
                }}
              />
              <Controller
                name="time"
                control={control}
                render={({ field: { value, onChange } }) => {
                  return (
                    <DatePicker
                      className="react-datepicker"
                      locale={ko}
                      timeCaption="마감 시간"
                      placeholderText={$t('create_announcement.select_deadline_placeholder')}
                      timeFormat="HH:mm"
                      dateFormat="HH:mm"
                      selected={value}
                      onChange={(data) => onChange(data)}
                      onCalendarOpen={() => handleChangeAutoClose(!isAutoClose)}
                      onKeyDown={(e) => {
                        e.preventDefault()
                      }}
                      icon={<Icon icon="icon/time-solid" size={16} color="neutralGray500" />}
                      showIcon
                      showTimeSelect
                      showTimeSelectOnly
                      injectTimes={[setHours(setMinutes(new Date(), 59), 23)]}
                    />
                  )
                }}
              />
            </Styles.DataPickerWrapper>
          )}
        </Styles.Column>
      )}
      {!isEdit && !isTemplate && (
        <Styles.Column>
          <Styles.Template>
            <Controller
              render={({ field }) => <CheckBox isChecked={field.value} onChange={field.onChange} />}
              name="posting_template"
            />
            {$t('create_announcement.job_posting_template_save')}
          </Styles.Template>
        </Styles.Column>
      )}
      <Styles.Column>
        <Styles.Text>{$t('placement.workspace_address')}</Styles.Text>
        <LocationSelect workPlaceOnly isAutoClose={isAutoClose} mapId={'posting_field_map'} />
      </Styles.Column>
      {hasPostingActiveController && (
        <Styles.Column>
          <Styles.Deadline>
            {$t('create_announcement.revitalization')}
            <Controller
              name="activate_state"
              control={control}
              render={({ field }) => {
                return <Switch isChecked={field.value} onChange={field.onChange} size="xs" />
              }}
            />
          </Styles.Deadline>
        </Styles.Column>
      )}
    </Styles.Field>
  )
}

export default CreatePostingField
