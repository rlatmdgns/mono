import { IconButton } from '@/shared/ui'
import { useRouter } from 'next/navigation'
import * as Styles from './styles'

interface RecruitApplyHeaderProps {
  enterpriseName: string
}

const RecruitApplyHeader = ({ enterpriseName }: RecruitApplyHeaderProps) => {
  const router = useRouter()

  const handleClick = () => router.back()

  return (
    <Styles.Wrapper>
      <IconButton icon="icon/left-line" onClick={handleClick} color="neutralGray800" />
      <Styles.EnterpriseName>{enterpriseName}</Styles.EnterpriseName>
    </Styles.Wrapper>
  )
}

export default RecruitApplyHeader
