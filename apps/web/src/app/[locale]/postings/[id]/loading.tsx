import PostingHeaderSkeleton from '@/app/[locale]/postings/_components/PostingHeader/PostingHeaderSkeleton'
import PostingContentSkeleton from '@/app/[locale]/postings/_components/PostingContent/PostingContentSkeleton'

export default function PostingLoading() {
  return (
    <>
      <PostingHeaderSkeleton />
      <PostingContentSkeleton />
    </>
  )
}
