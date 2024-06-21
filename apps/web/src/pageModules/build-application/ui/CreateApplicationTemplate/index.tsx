'use client'

import React from 'react'
import { BuildApplicationField } from '../BuildApplicationField'
import { useForm } from 'react-hook-form'
import { APPLICANT_BASIC_INFO_LIST } from '@/widgets/Application/constants'
import { withCommonBuildApplicationForm } from '@/pageModules/build-application/hoc'
import useCreateTemplate from '@/app/[locale]/settings/template/_hooks/useCreateTemplate'
import { useAuthority } from '@/shared/hooks'
import { getDefaultTerms } from '@/features/Application/lib'
import { useRouter } from 'next/navigation'
import { useResetRecoilState, useSetRecoilState } from 'recoil'
import { selectedTabState } from '@/shared/ui/Tabs/atom'
import { PAGE } from '@/shared/constants'
import { APPLICATION_TEMPLATE_INDEX } from '@/pageModules/build-application/consts'
import {
  SelectedApplicantBasicItemAtom,
  SelectedApplicantItemAtom,
} from '@/pageModules/build-application/recoil'
import { BuildApplicationForm } from '@/entities/build-application/types/buildApplicationForm'
import { PostingApplicantForm } from '@/features/build-application/types'

interface CreateApplicationTemplateProps {
  initialCustomApplicantItems: any
  initialApplicantItems: any[]
  initialAgreeItem: any
}

const CreateApplicationTemplate: React.FC<CreateApplicationTemplateProps> = ({
  initialCustomApplicantItems,
  initialApplicantItems,
  initialAgreeItem,
}) => {
  const router = useRouter()

  const { enterprise } = useAuthority()
  const { creatTemplateMutate } = useCreateTemplate()

  const setSelectedTabState = useSetRecoilState(selectedTabState)
  const resetSelectedApplicantItem = useResetRecoilState(SelectedApplicantItemAtom)
  const resetSelectedApplicantBasicItem = useResetRecoilState(SelectedApplicantBasicItemAtom)

  const methods = useForm<BuildApplicationForm>({
    defaultValues: {
      template_title: '',
      basic_list: APPLICANT_BASIC_INFO_LIST,
      applicant_list: initialApplicantItems,
      terms: {
        key: 'enterprise_required_personal_terms',
        description: initialAgreeItem?.description || getDefaultTerms(enterprise.enterprise_name),
        is_required: true,
      },
    },
  })
  const handleSubmit = ({
    form,
    templateTitle,
  }: {
    form: PostingApplicantForm[]
    templateTitle?: string
  }) => {
    const payload = {
      template_title: templateTitle,
      template_contents: {
        posting_applicant_form: form,
      },
      template_type: 'applicant_form',
    }
    creatTemplateMutate(payload)
    router.replace(PAGE.SETTINGS_TEMPLATE)
    setSelectedTabState(APPLICATION_TEMPLATE_INDEX)
    resetSelectedApplicantItem()
    resetSelectedApplicantBasicItem()
  }

  return (
    <BuildApplicationField
      initialCustomApplicantItems={initialCustomApplicantItems}
      initialApplicantItems={initialApplicantItems}
      initialAgreeItem={initialAgreeItem}
      methods={methods}
      onSubmit={handleSubmit}
      title="지원서 양식 템플릿 만들기"
      isTemplate
    />
  )
}

export default withCommonBuildApplicationForm(CreateApplicationTemplate)
