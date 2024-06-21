import React, { Suspense } from 'react'
import { serverHttp } from '@/shared/lib/serverHttp'
import { API_URL } from '@/shared/constants'
import { PostingResponse } from '@/interface/posting'
import { ApplicantsResponse } from '@/interface/applicants'
import PostingHeaderSkeleton from '@/app/[locale]/postings/_components/PostingHeader/PostingHeaderSkeleton'
import PostingContentSkeleton from '@/app/[locale]/postings/_components/PostingContent/PostingContentSkeleton'
import BuildApplicationButton from '@/app/[locale]/postings/_components/BuildApplicationButton'

const PostingHeader = React.lazy(() => import('@/app/[locale]/postings/_components/PostingHeader'))
const PostingContent = React.lazy(
  () => import('@/app/[locale]/postings/_components/PostingContent'),
)

const PostingPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id

  const result = await Promise.all([getPosting(id), getApplicants(id)])

  const initialPosting = result[0]
  const initialApplicants = result[1]
  const hasApplicationForm = initialPosting?.posting?.posting_applicant_form

  return (
    <>
      <Suspense fallback={<PostingHeaderSkeleton />}>
        <PostingHeader initialPosting={initialPosting} postingId={id} />
      </Suspense>
      <Suspense fallback={<PostingContentSkeleton />}>
        {hasApplicationForm ? (
          <PostingContent initialApplicants={initialApplicants} postingId={id} />
        ) : (
          <BuildApplicationButton />
        )}
      </Suspense>
    </>
  )
}
const getPosting = (id: string) => {
  return serverHttp.get<PostingResponse>(API_URL.POSTING(id))
}
const getApplicants = (id: string) => {
  return serverHttp.post<unknown, ApplicantsResponse>(API_URL.APPLICANTS(id), {
    is_view_fail: true,
  })
}

export default PostingPage
