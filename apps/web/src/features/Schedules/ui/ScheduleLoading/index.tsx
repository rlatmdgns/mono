import Skeleton from 'react-loading-skeleton'
import * as Styles from './styles'

export const ScheduleLoading = () => {
  return (
    <Styles.Container>
      <Styles.SkeletonHeader>
        <Skeleton width={'100%'} height={40} />
      </Styles.SkeletonHeader>
      <Styles.SkeletonBody>
        <Styles.SkeletonCalendarWrap>
          <Skeleton width={'100%'} height={'100%'} />
        </Styles.SkeletonCalendarWrap>
        <Styles.SkeletonSchedules>
          <Skeleton width={'100%'} height={'100%'} />
        </Styles.SkeletonSchedules>
      </Styles.SkeletonBody>
    </Styles.Container>
  )
}
