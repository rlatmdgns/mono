import * as Styles from './styles'
import { IconBoxButton } from '@/shared/ui'
import { useRecoilState } from 'recoil'
import { applicantModalSidebarIsFoldAtom } from '@/modals/ApplicantModal/recoil'

interface HeaderProps {
  title?: string
}

const Header = ({ title }: HeaderProps) => {
  const [isFold, setIsFold] = useRecoilState(applicantModalSidebarIsFoldAtom)

  const handleFold = () => setIsFold(!isFold)

  if (isFold) {
    return (
      <Styles.Wrapper $isFold={isFold}>
        <IconBoxButton
          onClick={handleFold}
          icon="icon/menu-fold-out-solid"
          state="standard"
          style="mono"
          size="xs"
        />
      </Styles.Wrapper>
    )
  }

  return (
    <Styles.Wrapper>
      <Styles.Posting>{title}</Styles.Posting>
      <IconBoxButton
        onClick={handleFold}
        icon="icon/menu-fold-in-solid"
        state="standard"
        style="mono"
        size="xs"
      />
    </Styles.Wrapper>
  )
}

export default Header
