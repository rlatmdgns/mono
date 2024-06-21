import * as Styles from './styles'
import { Tooltip } from '@/shared/ui'
import { getTabIconSource } from '@/modals/ApplicantModal/components/Tab/Tab.functions'
import { useTranslations } from 'next-intl'
import { Icon } from '@repo/ui'

interface TabIconProps {
  isApplication: boolean
  isFilePublic: boolean
}

const TabIcon = ({ isApplication, isFilePublic }: TabIconProps) => {
  const $t = useTranslations('common')
  const isTooltipDisabled = isApplication || isFilePublic

  const iconSource = getTabIconSource(isApplication, isFilePublic)

  return (
    <Styles.Wrapper>
      <Tooltip
        disabled={isTooltipDisabled}
        direction="bottom"
        text={$t('admin_recruitment_member_access')}
      >
        <Icon icon={iconSource} color="neutralGray800" />
      </Tooltip>
    </Styles.Wrapper>
  )
}
export default TabIcon
