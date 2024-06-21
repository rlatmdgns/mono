'use client'

import React from 'react'
import { BuildApplicationField } from '../BuildApplicationField'
import { useForm } from 'react-hook-form'
import { APPLICANT_BASIC_INFO_LIST } from '@/widgets/Application/constants'
import { withCommonBuildApplicationForm } from '@/pageModules/build-application/hoc'
import useUpdateTemplate from '@/app/[locale]/settings/template/_hooks/useUpdateTemplate'
import { useAuthority } from '@/shared/hooks'
import { getDefaultTerms } from '@/features/Application/lib'
import { useRouter } from 'next/navigation'
import { PAGE } from '@/shared/constants'
import { useSetRecoilState } from 'recoil'
import { selectedTabState } from '@/shared/ui/Tabs/atom'
import { APPLICATION_TEMPLATE_INDEX } from '@/pageModules/build-application/consts'
import { BuildApplicationForm } from '@/entities/build-application/types/buildApplicationForm'
import { PostingApplicantForm } from '@/features/build-application/types'

interface EditApplicationTemplateProps {
  initialCustomApplicantItems: any
  initialApplicantItems: any[]
  initialAgreeItem: any
  templateTitle: string
  id: string
}

const EditApplicationTemplate: React.FC<EditApplicationTemplateProps> = ({
  initialCustomApplicantItems,
  initialApplicantItems,
  initialAgreeItem,
  templateTitle,
  id,
}) => {
  const router = useRouter()

  const { enterprise } = useAuthority()
  const { updateMutate } = useUpdateTemplate(id)

  const setSelectedTabState = useSetRecoilState(selectedTabState)

  const methods = useForm<BuildApplicationForm>({
    defaultValues: {
      template_title: templateTitle,
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
      data: {
        template_title: templateTitle,
        template_contents: {
          posting_applicant_form: form,
        },
      },
      id,
    }
    updateMutate(payload)
    router.replace(PAGE.SETTINGS_TEMPLATE)
    setSelectedTabState(APPLICATION_TEMPLATE_INDEX)
  }

  return (
    <BuildApplicationField
      initialCustomApplicantItems={initialCustomApplicantItems}
      initialApplicantItems={initialApplicantItems}
      initialAgreeItem={initialAgreeItem}
      methods={methods}
      onSubmit={handleSubmit}
      title={templateTitle}
      isTemplate
    />
  )
}

export default withCommonBuildApplicationForm(EditApplicationTemplate)
