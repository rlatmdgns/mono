import * as Styles from './styles'
import { RecruitApplicationForm } from '@/widgets/recruit-application'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ApplicationHeader } from '@/entities/Application'

interface ApplicationTemplatePreviewProps {
  template?: any
}

export const ApplicationTemplatePreview = ({ template }: ApplicationTemplatePreviewProps) => {
  const data = template?.posting_applicant_form ? template.posting_applicant_form : template
  const method = useForm({
    mode: 'onBlur',
    defaultValues: {
      ...data,
    },
  })

  if (!data || !Array.isArray(data)) return null
  return (
    <FormProvider {...method}>
      <Styles.Wrapper>
        <Styles.Form>
          <Styles.HeaderWrapper>
            <ApplicationHeader postingTitle={''} />
          </Styles.HeaderWrapper>
          <Styles.FormContent>
            <RecruitApplicationForm customApplicantItems={data} enterpriseName="" policy="" />
          </Styles.FormContent>
        </Styles.Form>
      </Styles.Wrapper>
    </FormProvider>
  )
}
