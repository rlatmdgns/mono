import { Enterprise } from '@/interface/enterpriseInformation'
import { User } from '@/interface/user'
import { IMAGES, MODAL } from '@/shared/constants'
import Image from 'next/image'
import { useModal } from '@/shared/hooks'
import { IconButton } from '@/shared/ui'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'
import { Icon } from '@repo/ui'

interface SidebarHeaderProps {
  user?: User
  enterpriseInformation?: Enterprise
  count?: number
}

const SidebarHeader = ({ user, enterpriseInformation, count = 0 }: SidebarHeaderProps) => {
  const { openModal } = useModal()
  const $t = useTranslations('authority')

  const getConvertAuthority = (manager?: string | number) => {
    if (!manager) {
      return ''
    }

    if (manager === 'evaluationMember' || manager === 0) {
      return $t('evaluationMember')
    }

    if (manager === 'recruitmentMember' || manager === 1) {
      return $t('recruitmentMember')
    }

    if (manager === 'adminMember' || manager === 2) {
      return $t('adminMember')
    }
  }

  const handleMoreClick = () =>
    openModal(MODAL.HOME_SETTING, {
      user,
    })

  const handleAlarmClick = () => {
    openModal(MODAL.ALARM)
  }

  return (
    <Styles.Wrapper>
      <Styles.Content>
        <Styles.LogoWrapper>
          {enterpriseInformation && (
            <Image
              src={(enterpriseInformation?.enterprise_logo as string) || IMAGES.DEFAULT_COMPANY}
              alt={enterpriseInformation?.enterprise_name}
              width={40}
              height={40}
            />
          )}
        </Styles.LogoWrapper>
        <Styles.Info>
          <Styles.Company>{enterpriseInformation?.enterprise_name}</Styles.Company>
          <Styles.Personal>
            <Styles.Name>{user?.user_name}</Styles.Name>
            <Styles.Manager $authority={user?.user_authority}>
              {getConvertAuthority(user?.user_authority)}
            </Styles.Manager>
          </Styles.Personal>
        </Styles.Info>
        <Styles.MoreButton onClick={handleMoreClick}>
          <IconButton icon="icon/down-solid" size="md" />
        </Styles.MoreButton>
      </Styles.Content>
      <Styles.NotificationButton onClick={handleAlarmClick}>
        <Icon icon="icon/notification-solid" color="neutralGray400" size={20} />
        {count > 0 && <Styles.Count>{count}</Styles.Count>}
      </Styles.NotificationButton>
    </Styles.Wrapper>
  )
}

export default SidebarHeader
