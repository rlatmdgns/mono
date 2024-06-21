'use client'

import { ApplicationHeader } from '@/entities/Application'
import { Button, Toast } from '@/shared/ui'
import { RecruitApplicationForm } from '@/widgets/recruit-application'
import { FormProvider, useForm } from 'react-hook-form'
import * as Styles from './styles'

export const BuildApplicationPreview = () => {
  const preview = JSON?.parse(sessionStorage.getItem('build-application-preview') as string)
  const policy = preview?.terms?.description

  const method = useForm({
    mode: 'onBlur',
    defaultValues: {
      ...preview,
    },
  })

  const handleButtonClick = () => {
    Toast.warning('미리보기에서는 제출이 불가합니다.')
  }

  if (!preview) return null

  return (
    <Styles.Wrapper>
      <Styles.Header>미리보기</Styles.Header>
      <FormProvider {...method}>
        <Styles.FormWrapper>
          <Styles.Form>
            <ApplicationHeader postingTitle={preview.posting_title} />
            <RecruitApplicationForm
              customApplicantItems={preview.applicant_list}
              enterpriseName={preview.enterprise_name}
              policy={policy}
            />
            <Styles.Footer onClick={handleButtonClick} $disabled={true}>
              <Button
                type="submit"
                text="제출하기"
                state="standard"
                style="fill-strong"
                size="md"
              />
            </Styles.Footer>
          </Styles.Form>
        </Styles.FormWrapper>
      </FormProvider>
    </Styles.Wrapper>
  )
}
