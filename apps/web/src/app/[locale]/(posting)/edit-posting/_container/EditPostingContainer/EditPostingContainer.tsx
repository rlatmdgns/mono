'use client'

import CreatePostingField from '@/app/[locale]/(posting)/_components/CreatePostingField'
import EditPostingFooter from '@/app/[locale]/(posting)/_components/EditPostingFooter'
import { useGetFolders } from '@/shared/hooks'
import { PAGE } from '@/shared/constants'
import { Folder } from '@/interface/sidebar'
import { FoldersResponse } from '@/services/getFolders/getFolders.interface'
import updatePosting from '@/services/posting/updatePosting'
import { getDayFormat } from '@/shared/lib/utils'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil'
import * as Styles from './styles'
import { Toast } from '@/shared/ui'
import {
  CurrentContactPlaceAtom,
  CurrentInterviewPlaceAtom,
} from '@/shared/ui/LocationSelect/recoil/atom'
import { useTranslations } from 'next-intl'
import { useCreatePostingFieldConstants } from '@/app/[locale]/(posting)/_components/CreatePostingField/hooks/useCreatePostingFieldConstants'
import { useGetUtils } from '@/app/[locale]/(posting)/hooks/useGetUtils'

interface EditPostingContainerProps {
  id: string
  initialData: any
  initFolderData: FoldersResponse
}

const EditPostingContainer = ({ id, initialData, initFolderData }: EditPostingContainerProps) => {
  const router = useRouter()

  const setCurrentPlace = useSetRecoilState(CurrentInterviewPlaceAtom)
  const resetCurrentContactPlace = useResetRecoilState(CurrentContactPlaceAtom)
  const [currentContactPlace, setCurrentContactPlace] = useRecoilState(CurrentContactPlaceAtom)

  const [folders, setFolders] = useState<Folder[]>([])
  const [isCreateFolder, setIsCreateFolder] = useState(false)

  const { FIELD_OF_EMPLOYMENT } = useCreatePostingFieldConstants()
  const { isPostingValidation } = useGetUtils()

  const { folder_list } = useGetFolders(initFolderData)

  const $t = useTranslations()

  const field = FIELD_OF_EMPLOYMENT.filter((field) => field.label === initialData?.posting_field)[0]
  const filterFolder = folders.filter((folder) => folder.folder_id === initialData?.folder_id)[0]
  const folder = filterFolder
    ? { value: filterFolder?.folder_id, label: filterFolder.folder_name }
    : { value: initialData?.folder_id, label: $t('folder.none_folder_select') }

  const hasApplication = initialData.posting_applicant_form

  const handleUpdateIsCreateFolder = (status: boolean) => {
    setIsCreateFolder(status)
  }

  const getDefaultExperienceYears = () => {
    if (initialData.is_experienced) {
      return {
        min_experience_years: initialData.min_experience_years || undefined,
        max_experience_years: initialData.max_experience_years || undefined,
      }
    }
    return {
      min_experience_years: undefined,
      max_experience_years: undefined,
    }
  }

  const method = useForm({
    defaultValues: {
      ...initialData,
      date: initialData.posting_deadline ? dayjs(initialData.posting_deadline).toDate() : '',
      time: initialData.posting_deadline ? dayjs(initialData.posting_deadline).toDate() : '',
      posting_field: field,
      ...getDefaultExperienceYears(),
      folder_id: folder,
      isDeadline: initialData.posting_deadline,
    },
  })

  const handleInitData = () => {
    setCurrentPlace({
      type: 'contact',
      desc: initialData.posting_work_place_detail
        ? `${initialData.posting_work_place} ${initialData?.posting_work_place_detail ? initialData?.posting_work_place_detail : ''}`.trim()
        : initialData?.posting_work_place?.trim(),
    })

    setCurrentContactPlace({
      address: initialData.posting_work_place,
      detail_address: initialData.posting_work_place_detail,
    })
  }

  useEffect(() => {
    handleInitData()
  }, [initialData])

  useEffect(() => {
    if (!folder_list) return
    setFolders([...folder_list])
  }, [folder_list])

  const handleEdit = async (values: FieldValues) => {
    if (!isPostingValidation(values)) return
    try {
      const payload = {
        folder_id: values.folder_id.value,
        posting_title: values.posting_title,
        posting_position: values.posting_position,
        posting_field: values.posting_field.label,
        min_experience_years: values.min_experience_years || 0,
        max_experience_years: values.max_experience_years || 0,
        is_irrelevant: values.is_irrelevant,
        is_newcomer: values.is_newcomer,
        is_experienced: values.is_experienced,
        posting_work_info: values.posting_work_info,
        posting_qualification: values.posting_qualification,
        posting_advantage: values.posting_advantage,
        enterprise_explanation: values.enterprise_explanation,
        posting_deadline: values.isDeadline
          ? `${getDayFormat(values.date, 'YYYY-MM-DD')} ${values.time ? getDayFormat(values.time, 'HH:mm') : '00:00'}`
          : '',
        posting_template: values.posting_template ? 1 : 0,
        posting_work_place: currentContactPlace.address,
        posting_work_place_detail: currentContactPlace.detail_address,
        activate_state: hasApplication ? values.activate_state : false,
        posting_benefits_welfare: values.posting_benefits_welfare,
      }
      await updatePosting(id, payload)
      Toast.success($t('messages.modify_done'))
      resetCurrentContactPlace()
      router.push(PAGE.POSTINGS_DETAIL(id))
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }
    }
  }

  return (
    <FormProvider {...method}>
      <Styles.Form onSubmit={method.handleSubmit(handleEdit)} noValidate>
        <Styles.Content>
          <CreatePostingField
            folders={folders}
            isCreateFolder={isCreateFolder}
            hasApplication={hasApplication}
            handleUpdateIsCreateFolder={handleUpdateIsCreateFolder}
            isEdit
          />
        </Styles.Content>
        <EditPostingFooter />
      </Styles.Form>
    </FormProvider>
  )
}

export default EditPostingContainer
