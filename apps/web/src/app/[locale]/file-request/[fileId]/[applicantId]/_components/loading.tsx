import Skeleton from 'react-loading-skeleton'
import * as Styles from '@/app/[locale]/file-request/[fileId]/[applicantId]/_container/styles'

const Loading = () => {
  return (
    <Styles.FileRequestWrap>
      <Styles.LoadingBox>
        <Skeleton width="100%" height="100%" />
      </Styles.LoadingBox>
    </Styles.FileRequestWrap>
  )
}

export default Loading
