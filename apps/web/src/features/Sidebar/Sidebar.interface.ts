import React from 'react'
import { IconNames } from "@repo/ui/src/components/Icon";

interface SidebarTitle {
  ko: string
  en: string

  [index: string]: string
}

export interface SidebarItemData {
  icon: IconNames
  title: SidebarTitle
  link: string
  path?: string
  option?: React.ReactNode
  authProcess?: boolean
}
