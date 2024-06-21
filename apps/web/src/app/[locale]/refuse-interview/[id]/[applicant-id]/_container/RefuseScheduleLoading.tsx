import * as Styles from './styles'
import Skeleton from 'react-loading-skeleton'

const RefuseScheduleLoading = () => {
  return (
    <Styles.RefuseScheduleWrap>
      <Styles.LoadingBox>
        <Skeleton width="100%" height="100%" />
      </Styles.LoadingBox>
    </Styles.RefuseScheduleWrap>
  )
}

export default RefuseScheduleLoading
