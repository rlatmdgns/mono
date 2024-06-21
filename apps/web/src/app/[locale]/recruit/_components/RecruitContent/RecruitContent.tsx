'use client'

import RecruitContents from '@/app/[locale]/recruit/_components/RecruitContents'
import RecruitLayout from '@/app/[locale]/recruit/_components/RecruitLayout/RecruitLayout'
import { RecruitContent } from '@/interface/recruitPage'

const RecruitContainer = ({ isClosed, recruit, id, enterpriseName, refererURL }: RecruitContent) => {
  return (
    <RecruitLayout>
      <RecruitContents
        isClosed={isClosed}
        recruit={recruit}
        id={id}
        enterpriseName={enterpriseName}
        refererURL={refererURL}
      />
    </RecruitLayout>
  )
}

export default RecruitContainer
