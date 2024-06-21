'use client'

import Content from '@/app/[locale]/collection-and-use-of-personal-information/_components/Content'

const CollectionAndUseOfPersonalInformationPage = ({
  params,
}: {
  params: { enterpriseName: string }
}) => {
  return <Content enterpriseName={params.enterpriseName} />
}

export default CollectionAndUseOfPersonalInformationPage
