import * as Styles from './styles'
import { useRecoilValue } from 'recoil'
import { applicantModalSidebarIsFoldAtom } from '@/modals/ApplicantModal/recoil'
import { IconBoxButton } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { useTranslations } from 'next-intl'

const UpdateStepDropdownButton = () => {
  const $t = useTranslations('announcement_detail.step')
  const isFold = useRecoilValue(applicantModalSidebarIsFoldAtom)

  if (isFold) return <IconBoxButton icon="icon/move-solid" size="xs" state="standard" />

  return (
    <Styles.Wrapper>
      {$t('evaluation_step_change')}
      <Icon icon="icon/down-solid" color="neutralGray500" />
    </Styles.Wrapper>
  )
}

export default UpdateStepDropdownButton
