import RecruitContainer from '@/app/[locale]/recruit/_components/RecruitContent'
import { API_URL } from '@/shared/constants'
import { RecruitPageRequest, RecruitPageResponse } from '@/interface/recruitPage'
import { serverHttp } from '@/shared/lib/serverHttp'
import { headers } from 'next/headers'
import React from 'react'
import { getHostName } from '@/entities/Application/lib'

interface RecruitPageProps {
  params: {
    enterpriseName: string
    id: string
  }
}

const RecruitPage = async ({ params }: RecruitPageProps) => {
  const referer = headers()?.get('referer')
  const url = getHostName(referer)
  const origin = getHostName(process.env.NEXT_PUBLIC_ORIGIN as string)
  const refererURL = url?.includes(origin) ? url : '기타'

  const result = await getRecruitPage(params.id, {
    enterprise_recruit_url: params.enterpriseName,
    history_url: refererURL,
  })
  const recruit = result.posting
  const isClosed = result.is_closed
  return (
    <RecruitContainer
      isClosed={isClosed}
      recruit={recruit}
      id={params.id}
      enterpriseName={params.enterpriseName}
      refererURL={refererURL}
    />
  )
}
const getRecruitPage = (id: string, params: RecruitPageRequest) => {
  return serverHttp.get<RecruitPageResponse>(API_URL.RECRUIT_PAGE(id, params))
}

export default RecruitPage
