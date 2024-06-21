'use client'
import CreatePostingField from '@/app/[locale]/(posting)/_components/CreatePostingField'
import CreatePostingFooter from '@/app/[locale]/(posting)/_components/CreatePostingFooter'
import CreatePostingHeader from '@/app/[locale]/(posting)/_components/CreatePostingHeader'
import CreatePostingResult from '@/app/[locale]/(posting)/_components/CreatePostingResult'
import CreatePostingMemberContainer from '@/app/[locale]/(posting)/create-posting/_container/CreatePostingMemberContainer'
import usePostingRequirement from '@/app/[locale]/(posting)/create-posting/_hooks/usePostingRequirement'
import { useGetFolders, useTemplateContent } from '@/shared/hooks'

import { AUTHORITY } from '@/shared/constants'
import { MemberData } from '@/interface/member'
import { FoldersResponse } from '@/services/getFolders/getFolders.interface'
import createPosting from '@/services/posting/createPosting'
import { PostingRequirementResponse } from '@/services/posting/getPostingRequirement/getPostingRequirement.interface'
import { getDayFormat } from '@/shared/lib/utils'
import React, { useEffect, useState } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import {
  createPostingResultAtom,
  creatPostingStepAtom,
  templateIdAtom,
} from '@/app/[locale]/(posting)/create-posting/_recoil'
import * as Styles from './styles'
import {
  CurrentContactPlaceAtom,
  CurrentInterviewPlaceAtom,
} from '@/shared/ui/LocationSelect/recoil/atom'
import { useCreatePostingContainerConstants } from '@/app/[locale]/(posting)/create-posting/_container/CreatePostingContainer/hooks/useCreatePostingContainerConstants'
import { useCreatePostingFieldConstants } from '@/app/[locale]/(posting)/_components/CreatePostingField/hooks/useCreatePostingFieldConstants'
import { useGetUtils } from '@/app/[locale]/(posting)/hooks/useGetUtils'

interface CreatePostingContainerProps {
  initialData: PostingRequirementResponse
  initFolderData: FoldersResponse
}

type FormType = {
  folder_id: { value: string; label: string }
  posting_title: string
  enterprise_explanation: string
  posting_position: string
  posting_field: any[number]
  min_experience_years: number
  max_experience_years: number
  is_irrelevant: boolean
  is_newcomer: boolean
  is_experienced: boolean
  posting_work_info: string
  posting_qualification: string
  posting_advantage: string
  posting_benefits_welfare: string
  posting_work_place: string
  posting_work_place_detail?: string
}

const CreatePostingContainer = ({ initialData, initFolderData }: CreatePostingContainerProps) => {
  const { data: postingRequirement } = usePostingRequirement(initialData)
  const { folder_list } = useGetFolders(initFolderData)
  const setCurrentPlace = useSetRecoilState(CurrentInterviewPlaceAtom)
  const id = useRecoilValue(templateIdAtom)
  const [step, setStep] = useRecoilState(creatPostingStepAtom)
  const setCreatePostingResult = useSetRecoilState(createPostingResultAtom)
  const [currentContactPlace, setCurrentContactPlace] = useRecoilState(CurrentContactPlaceAtom)
  const [isCreateFolder, setIsCreateFolder] = useState(false)
  const { defaultValues } = useCreatePostingContainerConstants()
  const { FIELD_OF_EMPLOYMENT } = useCreatePostingFieldConstants()
  const { isPostingValidation } = useGetUtils()

  const handleUpdateIsCreateFolder = (status: boolean) => {
    setIsCreateFolder(status)
  }

  const { data } = useTemplateContent(id)
  const method = useForm<FormType>({
    mode: 'all',
    defaultValues,
  })
  const { setValue, watch, reset } = method

  const isFistStep = step === 1
  const isSecondStep = step === 2

  const handlePostingCreate = async (values: FieldValues) => {
    if (!isPostingValidation(values)) return

    if (isFistStep) {
      setStep(2)
    }
    if (!isSecondStep) {
      return
    }
    const memberIds = values?.posting_member
      ?.filter((member: MemberData) => member.user_authority !== AUTHORITY.ADMIN)
      ?.map((member: MemberData) => member.identification)

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
        ? `${getDayFormat(values.date, 'YYYY-MM-DD')} ${getDayFormat(values.time, 'HH:mm')}`
        : '',
      posting_member: memberIds,
      posting_template: values.posting_template ? 1 : 0,
      posting_work_place: currentContactPlace.address,
      posting_work_place_detail: currentContactPlace.detail_address,
      posting_benefits_welfare: values.posting_benefits_welfare,
      activate_state: false,
    }
    const result = await createPosting(payload)
    if (!result) {
      return
    }
    setCreatePostingResult(result)
    setStep(3)
    setCurrentPlace({
      type: 'contact',
      desc: '',
    })
  }
  const setDefaultValue = () => {
    const contents = data?.template_contents
    const field = FIELD_OF_EMPLOYMENT.filter((field) => field.label === contents?.posting_field)[0]

    if (!contents?.posting_work_place) return

    setCurrentPlace({
      type: 'contact',
      desc: contents.posting_work_place_detail
        ? `${contents.posting_work_place} ${contents.posting_work_place_detail ? contents.posting_work_place_detail : ''}`.trim()
        : contents.posting_work_place?.trim(),
    })

    setCurrentContactPlace({
      address: contents.posting_work_place,
      detail_address: contents.posting_work_place_detail,
    })

    reset({
      ...contents,
      posting_field: field,
    })
  }

  const setDefaultEnterpriseExplanation = () => {
    if (!postingRequirement) return
    if (!!watch('enterprise_explanation')) return
    setValue(
      'enterprise_explanation',
      postingRequirement.enterprise_information.enterprise_explanation,
    )
  }

  useEffect(() => {
    if (!data) {
      return reset({
        ...defaultValues,
        enterprise_explanation: postingRequirement?.enterprise_information?.enterprise_explanation,
      })
    }
    setDefaultValue()
  }, [data])

  useEffect(() => {
    setDefaultEnterpriseExplanation()
  }, [postingRequirement])

  useEffect(() => {
    setValue('posting_work_place', currentContactPlace.address)
    setValue('posting_work_place_detail', currentContactPlace.detail_address)
  }, [currentContactPlace])

  const render = () => {
    if (isFistStep) {
      return (
        <CreatePostingField
          folders={folder_list}
          templates={postingRequirement.template_list}
          isCreateFolder={isCreateFolder}
          handleUpdateIsCreateFolder={handleUpdateIsCreateFolder}
        />
      )
    }
    if (isSecondStep) {
      return <CreatePostingMemberContainer members={postingRequirement.enterprise_member_list} />
    }
    return <CreatePostingResult />
  }
  return (
    <FormProvider {...method}>
      <Styles.Form onSubmit={method.handleSubmit(handlePostingCreate)} noValidate>
        <CreatePostingHeader />
        <Styles.Content>{render()}</Styles.Content>
        <CreatePostingFooter />
      </Styles.Form>
    </FormProvider>
  )
}

export default CreatePostingContainer
