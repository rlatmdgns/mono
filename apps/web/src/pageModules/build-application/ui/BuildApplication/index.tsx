'use client'

import { APPLICANT_BASIC_INFO_LIST } from '@/widgets/Application/constants'
import { useCreatePostingApplicantForm } from '@/features/build-application/hooks'
import { BuildApplicationField } from '@/pageModules/build-application/ui/BuildApplicationField'
import { withCommonBuildApplicationForm } from '@/pageModules/build-application/hoc'
import { useForm } from 'react-hook-form'
import React from 'react'
import useTemplates from '@/app/[locale]/settings/template/_hooks/useTemplates'
import { useAuthority } from '@/shared/hooks'
import { getDefaultTerms } from '@/features/Application/lib'
import { usePostingApplicantForm } from '@/entities/build-application/hooks/usePostingApplicantForm'
import {
  filterCustomApplicantItems,
  getAgreeItem,
} from '@/pageModules/build-application/model/buildApplication'
import { PostingApplicantForm } from '@/features/build-application/types'
import { BuildApplicationForm } from '@/entities/build-application/types/buildApplicationForm'
import { PostingApplicationFormResponse } from '@/entities/recruit/types/PostingApplicationForm'

interface BuildApplicationProps {
  postingId: string
  initialData: PostingApplicationFormResponse
}

const BuildApplication = ({ postingId, initialData }: BuildApplicationProps) => {
  const { enterprise } = useAuthority()

  const { data: customApplicantItems } = usePostingApplicantForm(postingId, initialData)

  const defaultValues = {
    basic_list: APPLICANT_BASIC_INFO_LIST,
    applicant_list: filterCustomApplicantItems(customApplicantItems?.datas),
    terms: {
      key: 'enterprise_required_personal_terms',
      description:
        getAgreeItem(customApplicantItems) || getDefaultTerms(enterprise.enterprise_name),
      is_required: true,
    },
    is_template: false,
  }
  const methods = useForm<BuildApplicationForm>({
    defaultValues,
  })
  const { watch, formState, reset } = methods
  const { data: templates } = useTemplates({ template_type: 'applicant_form' })

  const applicantFormReset = (res: any) => {
    if (!formState.isSubmitSuccessful) {
      return
    }
    reset({
      ...defaultValues,
      applicant_list: filterCustomApplicantItems(res.posting_applicant_form),
      is_template: res.is_template,
    })
  }

  const { createPostingApplicantMutate } = useCreatePostingApplicantForm(
    postingId,
    applicantFormReset,
  )

  const handleFormSubmit = ({
    form,
    isValid,
  }: {
    form: PostingApplicantForm[]
    isValid?: boolean
  }) => {
    createPostingApplicantMutate({
      posting_applicant_form: form,
      is_edited: isValid || false,
      is_template: watch('is_template') || false,
    })
  }

  return (
    <BuildApplicationField
      initialCustomApplicantItems={customApplicantItems}
      initialApplicantItems={filterCustomApplicantItems(customApplicantItems?.datas)}
      initialAgreeItem={getAgreeItem(customApplicantItems)}
      methods={methods}
      templates={templates}
      onSubmit={handleFormSubmit}
      title="지원서 양식 만들기"
    />
  )
}

export default withCommonBuildApplicationForm(BuildApplication)
