import { useAuthority } from '@/shared/hooks'
import React from 'react'
import * as Styles from './styles'
import { Icon } from '@repo/ui'
import { SidebarItemData } from '@/features/Sidebar/Sidebar.interface'
import { useLocale } from 'next-intl'

interface SidebarItemProps {
  menu: SidebarItemData
  pathname: string
  color?: 'neutralGray500' | 'neutralGray800'
}

const SidebarItem = ({ menu, pathname, color = 'neutralGray500' }: SidebarItemProps) => {
  const { authority } = useAuthority()
  const isEvaluationMember = authority === 'evaluationMember'
  const currentLocale = useLocale()

  const { title, link } = menu
  const icon = menu.icon

  const isActive = pathname === link
  const disabled = !!menu.authProcess && isEvaluationMember

  return (
    <Styles.Item $disabled={disabled}>
      <Styles.StyledLink
        href={link}
        $isActive={isActive}
        $color={color}
        $disabled={disabled}
        prefetch={false}
      >
        <Icon icon={icon} color={isActive ? 'blue600' : color} />
        {title[currentLocale]}
      </Styles.StyledLink>
      {menu.option}
    </Styles.Item>
  )
}

export default SidebarItem
