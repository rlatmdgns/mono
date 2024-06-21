import { RequiredText } from '@/shared/ui'
import * as Styles from './styles'
import { usePathname } from 'next/navigation'
import { Icon } from '@repo/ui'

interface ApplicantFormLabelProps {
  title: string
  isRequired: boolean
  isCanView: boolean
}

export const ApplicantFormLabel = ({ title, isRequired, isCanView }: ApplicantFormLabelProps) => {
  const pathname = usePathname()
  const isBuild = !pathname.includes('recruit') && !pathname.includes('preview')
  const isLock = !isCanView && isBuild

  return (
    <Styles.Wrapper>
      {isLock && <Icon icon="icon/lock-line" color="neutralGray600" size={16} />}
      <RequiredText title={title} isRequired={isRequired} />
    </Styles.Wrapper>
  )
}
