'use client'

import ApplicationSubmitted from '@/app/[locale]/recruit/[enterpriseName]/[id]/apply/_components/ApplicationSubmitted'
import RecruitApplyHeader from '@/app/[locale]/recruit/[enterpriseName]/[id]/apply/_components/RecruitApplyHeader'
import { ApplicationHeader } from '@/entities/Application'
import { usePostingApplicationForm } from '@/entities/recruit/hooks/usePostingApplicationForm'
import { useCreateApplicant } from '@/features/applicant/hooks/useCreateApplicant'
import { Button } from '@/shared/ui'
import { RecruitApplicationForm } from '@/widgets/recruit-application'
import { applicationFormValidation, initApplicationForm } from '@/widgets/recruit-application/lib'
import { useEffect, useState } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import * as Styles from './styles'
import { PostingApplicationFormResponse } from '@/entities/recruit/types/PostingApplicationForm'
import { ApplicantRequest } from '@/entities/Application/types/ApplicantRequest'

interface RecruitApplyContentProps {
  id: string
  enterpriseRecruitUrl: string
  refererURL?: string
  initialCustomApplicantItems: PostingApplicationFormResponse
}

const RecruitApplyContent = ({
  id,
  enterpriseRecruitUrl,
  refererURL,
  initialCustomApplicantItems,
}: RecruitApplyContentProps) => {
  const [isSuccess, setIsSuccess] = useState(false)
  const handleSuccess = () => setIsSuccess(true)

  const { data: customApplicantItems } = usePostingApplicationForm(
    id,
    enterpriseRecruitUrl,
    initialCustomApplicantItems,
  )
  const { createApplicantMutate } = useCreateApplicant(id, handleSuccess)
  const postingTitle = customApplicantItems?.posting?.title || ''
  const isPostingActive = customApplicantItems?.posting?.activate_state
  const enterpriseName = customApplicantItems?.enterprise_name || ''
  const policy = customApplicantItems?.terms?.enterprise_required_personal_terms || ''

  const methods = useForm<ApplicantRequest>({
    mode: 'onBlur',
  })

  const {
    handleSubmit,
    formState: { isValid, isSubmitSuccessful, isSubmitting },
    reset,
    watch,
  } = methods

  const submitButtonDisabled = !isValid || isSubmitting || !isPostingActive
  const submitButtonText = isPostingActive ? '제출하기' : '마감된 공고입니다.'

  const handleFormSubmit = async (values: FieldValues) => {
    const filterEducations = values.educations.filter((education: any) => education.education_type)

    if (!applicationFormValidation(customApplicantItems, values)) return
    createApplicantMutate({ ...values, educations: filterEducations })
  }

  useEffect(() => {
    reset(initApplicationForm(customApplicantItems, refererURL))
  }, [])

  if (isSuccess && isSubmitSuccessful) {
    return (
      <ApplicationSubmitted
        postingTitle={postingTitle}
        enterpriseName={enterpriseName}
        name={watch('name')}
        email={watch('email')}
        phone={watch('phone')}
      />
    )
  }

  return (
    <FormProvider {...methods}>
      <Styles.Wrapper>
        <RecruitApplyHeader enterpriseName={enterpriseName} />
        <Styles.Form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
          <Styles.Container>
            <ApplicationHeader postingTitle={postingTitle} />
            <RecruitApplicationForm
              customApplicantItems={customApplicantItems?.datas || []}
              enterpriseName={enterpriseName}
              policy={policy}
            />
          </Styles.Container>
          <Styles.Footer>
            <Button
              text={submitButtonText}
              disabled={submitButtonDisabled}
              state="standard"
              style="fill-strong"
              type="submit"
              size="md"
            />
          </Styles.Footer>
        </Styles.Form>
        <Styles.ChannelTalk>
          <Styles.ChannelTalkText>
            지원서 제출 과정에서 문제 발생하였다면
            <br />
            <Styles.ChannelTalkLink as="a" href="https://steadhr.channel.io/home" target="_blank">
              스테드 고객센터
            </Styles.ChannelTalkLink>
            로 문의 부탁드립니다.
          </Styles.ChannelTalkText>
        </Styles.ChannelTalk>
      </Styles.Wrapper>
    </FormProvider>
  )
}

export default RecruitApplyContent
