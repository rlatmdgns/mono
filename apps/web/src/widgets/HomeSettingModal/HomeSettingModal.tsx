import { Badge, ModalLayout } from '@/shared/ui'
import { useRouter } from 'next/navigation'
import { User } from '@/interface/user'
import { PAGE } from '@/shared/constants'
import { signOut } from './api/signOut'
import { HomeProfile } from './ui/HomeProfile'
import { SettingItem } from './ui/SettingItem'
import React from 'react'
import * as Styles from './styles'
import { SettingListTitle, SettingListWrapper } from './styles'
import { useTranslations } from 'next-intl'

interface SettingModalProps {
  user: User
  onClose: () => void
}

const HomeSettingModal = ({ user, onClose }: SettingModalProps) => {
  const $t = useTranslations()
  const router = useRouter()

  const handleLogout = async () => {
    const response = await signOut()
    if (response.status === 200) {
      router.push(PAGE.SIGN_IN)
    }
  }

  return (
    <ModalLayout onClick={onClose}>
      <Styles.SettingModal>
        <HomeProfile user={user} />
        <SettingListWrapper>
          <SettingListTitle>워크스페이스 환경 설정</SettingListTitle>
          <Styles.SettingList>
            <SettingItem
              text={$t('page.setting')}
              icon="icon/setting-solid"
              href={PAGE.SETTINGS_ACCOUNT}
            />
            <SettingItem
              text={$t('login.logout')}
              icon="icon/logout-solid"
              onClick={handleLogout}
            />
          </Styles.SettingList>
        </SettingListWrapper>
        {/*
        {user.user_authority === 'adminMember' && (
          <SettingListWrapper>
            <SettingListTitle>온보딩 솔루션</SettingListTitle>
            <Styles.SettingList>
              <SettingItem
                text={
                  <Styles.OmsItem>
                    OMS <Badge text={'Beta'} />
                  </Styles.OmsItem>
                }
                icon="icon/setting-solid"
                href={PAGE.ONBOARDING}
              />
            </Styles.SettingList>
          </SettingListWrapper>
        )}
        */}
      </Styles.SettingModal>
    </ModalLayout>
  )
}

export default HomeSettingModal
