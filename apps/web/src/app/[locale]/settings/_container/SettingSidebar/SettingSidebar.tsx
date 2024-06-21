'use client'

import {
  ADMIN_SETTING_MENU,
  SETTING_EVALUATOR_MENUS,
  SETTING_MENUS,
} from '@/app/[locale]/settings/_container/SettingSidebar/SettingSidebar.constants'
import { usePathname } from 'next/navigation'
import React from 'react'
import * as Styles from './styles'
import { AUTHORITY } from '@/shared/constants'
import { useLocale } from 'next-intl'

interface SettingSidebarProps {
  authority: string
}

const SettingSidebar = ({ authority }: SettingSidebarProps) => {
  const pathname = usePathname() as string
  const currentLocale = useLocale()

  const isAdmin = authority === AUTHORITY.ADMIN
  const isEvaluator = authority === AUTHORITY.EVALUATOR
  const menus = isEvaluator ? SETTING_EVALUATOR_MENUS : SETTING_MENUS
  const adminMenus: any = ADMIN_SETTING_MENU

  return (
    <Styles.Aside>
      <Styles.MenuList>
        {menus?.map((menu: any) => (
          <Styles.MenuItem key={menu[currentLocale]}>
            <Styles.Title>{menu[currentLocale]}</Styles.Title>
            <Styles.MenuSubList>
              {menu.items.map((subMenu: any) => (
                <Styles.MenuSubItem key={subMenu[currentLocale]}>
                  <Styles.Title>
                    <Styles.StyledLink href={subMenu.path} $isActive={pathname === subMenu.path}>
                      {subMenu[currentLocale]}
                    </Styles.StyledLink>
                  </Styles.Title>
                </Styles.MenuSubItem>
              ))}
            </Styles.MenuSubList>
          </Styles.MenuItem>
        ))}
        {isAdmin && (
          <Styles.MenuItem>
            <Styles.Title>{adminMenus[currentLocale]}</Styles.Title>
            <Styles.MenuSubList>
              {adminMenus.items.map((subMenu: any) => (
                <Styles.MenuSubItem key={subMenu[currentLocale]}>
                  <Styles.Title>
                    <Styles.StyledLink href={subMenu.path} $isActive={pathname === subMenu.path}>
                      {subMenu[currentLocale]}
                    </Styles.StyledLink>
                  </Styles.Title>
                </Styles.MenuSubItem>
              ))}
            </Styles.MenuSubList>
          </Styles.MenuItem>
        )}
      </Styles.MenuList>
    </Styles.Aside>
  )
}

export default SettingSidebar
