import React from 'react'
import RecruitApplyContent from '@/app/[locale]/recruit/[enterpriseName]/[id]/apply/_components/RecruitApplyContent'
import { getSeverPostingApplicationForm } from '@/entities/recruit/api/getSeverPostingApplicationForm'

interface RecruitApplyPageProps {
  params: {
    enterpriseName: string
    id: string
  }
  searchParams: {
    referer: string
  }
}

const RecruitApplyPage = async ({ params, searchParams }: RecruitApplyPageProps) => {
  const initialCustomApplicantItems = await getSeverPostingApplicationForm(
    params.id,
    params.enterpriseName,
  )

  return (
    <RecruitApplyContent
      id={params.id}
      enterpriseRecruitUrl={params.enterpriseName}
      refererURL={searchParams?.referer}
      initialCustomApplicantItems={initialCustomApplicantItems}
    />
  )
}

export default RecruitApplyPage
