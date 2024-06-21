import * as Styles from './styles'
import Skeleton from 'react-loading-skeleton'

export const RecruitLoading = () => {
  return (
    <Styles.LoadingWrapper>
      <Styles.Loading>
        <Skeleton height={40} />
        <Skeleton height={40} />
      </Styles.Loading>
      <Styles.Loading>
        <Skeleton height={40} />
        <Skeleton height={40} />
      </Styles.Loading>
      <Styles.Loading>
        <Skeleton height={40} />
        <Skeleton height={40} />
      </Styles.Loading>
    </Styles.LoadingWrapper>
  )
}
