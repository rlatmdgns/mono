'use client'

import { BackButton } from '@/features/Application/ui'
import { PAGE } from '@/shared/constants'
import { useFormContext } from 'react-hook-form'
import * as Styles from './styles'
import { Button } from '@repo/ui'
import { RecruitApplicationItem } from '@/entities/build-application/types/applicationItem'

interface BuildApplicationHeaderProps {
  enterpriseName: string
  title?: string
  postingTitle: string
  originalApplicantItems: RecruitApplicationItem[]
  originalTermsData: string
  isChanged: boolean
  isTemplate?: boolean
}

export const BuildApplicationHeader = ({
  enterpriseName,
  title,
  postingTitle,
  originalApplicantItems,
  originalTermsData,
  isChanged = false,
  isTemplate,
}: BuildApplicationHeaderProps) => {
  const { getValues } = useFormContext()

  const handlePreview = () => {
    const preview = JSON.stringify({
      ...getValues(),
      posting_title: postingTitle,
      enterprise_name: enterpriseName,
    })
    sessionStorage.setItem('build-application-preview', preview)
    window.open(PAGE.PREVIEW_BUILD_APPLICATION)
  }

  return (
    <Styles.Header>
      <BackButton
        title={title}
        originalApplicantItems={originalApplicantItems}
        originalTermsData={originalTermsData}
        isChanged={isChanged}
        isTemplate={isTemplate}
      />
      <Styles.Buttons>
        <Button
          text="미리보기"
          state="secondary"
          style="mono"
          width="72px"
          onClick={handlePreview}
        />
        <Button disabled={!isChanged} type="submit" text="저장" style="mono" width="61px" />
      </Styles.Buttons>
    </Styles.Header>
  )
}
