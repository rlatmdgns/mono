import { PAGE } from '@/shared/constants'
import CreateFolderButton from '@/features/Sidebar/components/CreateFolderButton'
import React from 'react'
import SidebarItem from '../SidebarItem'
import * as Styles from './styles'
import { SidebarItemData } from '@/features/Sidebar/Sidebar.interface'
import { useTranslations } from 'next-intl'

interface SidebarGNBProps {
  pathname: string
}

const SidebarGNB = ({ pathname }: SidebarGNBProps) => {
  const $t = useTranslations('sidebar')
  const menu: SidebarItemData = {
    icon: 'icon/recruitment-solid',
    title: {
      ko: '전체공고',
      en: 'All Announcements',
    },
    link: PAGE.HOME,
    option: <CreateFolderButton />,
  }

  return (
    <Styles.List>
      <SidebarItem menu={menu} pathname={pathname} />
    </Styles.List>
  )
}

export default SidebarGNB
