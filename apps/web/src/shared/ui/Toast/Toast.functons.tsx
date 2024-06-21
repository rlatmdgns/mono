import * as Styles from '@/shared/ui/Toast/styles'
import { ReactNode } from 'react'
import { ToastOptions } from 'react-toastify'
import { ToastButtonProps } from '@/shared/ui/Toast/Toast.interface'
import { TOAST_ICONS, TOAST_ICONS_COLORS } from '@/shared/ui/Toast/Toast.constants'
import { ToastButton } from './ToastButton'
import { Icon } from '@repo/ui'
import { colorType, IconNames } from "@repo/ui/src/components/Icon";

export const getToastContent = (message: ReactNode, button?: ToastButtonProps) => {
  return (
    <>
      <Styles.Text>{message}</Styles.Text>
      <ToastButton button={button} state={'primary'}/>
    </>
  )
}

export const getToastIcon = (type: 'success' | 'error' | 'warning' | 'info' | 'pending') => {
  const icon = TOAST_ICONS[type] as IconNames
  const iconColor = TOAST_ICONS_COLORS[type] as colorType
  return <Icon icon={icon} color={iconColor} size={24}/>
}

export const getDefaultOptions = (
  type: 'success' | 'error' | 'warning' | 'info' | 'pending',
  options: ToastOptions,
) => {
  return {
    icon: getToastIcon(type),
    ...options,
  }
}
