import * as Styles from './styles'
import { EmptyProfile } from './EmptyProfile'
import Image from 'next/image'
import { ApplicationViewerItemForm } from '@/entities/application-viewer/types'

interface ProfileProps {
  isEvaluator: boolean
  profile?: {
    data: string
    form: ApplicationViewerItemForm
  }
}

export const Profile = ({ profile, isEvaluator }: ProfileProps) => {
  const data = profile?.data
  const isCanView = profile?.form?.is_canview

  if (!profile || ((!isCanView || !data) && isEvaluator)) {
    return null
  }
  if (!data) {
    return <EmptyProfile />
  }
  return (
    <Styles.Wrapper>
      <Image src={data} alt="지원자 사진" width={138} height={174} objectFit="contain" />
    </Styles.Wrapper>
  )
}
