import * as Styles from './styles'
import { ReactNode } from 'react'
import { toast, ToastOptions, ToastPromiseParams } from 'react-toastify'
import { ToastButtonProps } from '@/shared/ui/Toast/Toast.interface'
import { getDefaultOptions, getToastContent, getToastIcon } from '@/shared/ui/Toast/Toast.functons'
import { IMAGES } from '@/shared/constants'

export const Toast = {
  info: (message: ReactNode, button?: ToastButtonProps, options: ToastOptions = {}) => {
    toast.info(getToastContent(message, button), getDefaultOptions('info', options))
  },
  success: (message: ReactNode, options: ToastOptions = {}) => {
    toast.success(getToastContent(message), getDefaultOptions('success', options))
  },
  error: (message: ReactNode, button?: ToastButtonProps, options: ToastOptions = {}) => {
    toast.error(getToastContent(message, button), getDefaultOptions('error', options))
  },
  warning: (message: ReactNode, options: ToastOptions = {}) => {
    toast.success(getToastContent(message), getDefaultOptions('warning', options))
  },
  promise: (promise: () => Promise<void>, options: ToastPromiseParams = {}) => {
    toast.promise(promise, {
      pending: {
        render() {
          if (options.pending) return `${options.pending}`
          return <Styles.SkeletonImage width={16} height={16} src={IMAGES.SKELETON_TITLE} alt="" />
        },
        icon: getToastIcon('pending'),
      },
      success: {
        render() {
          return `${options.success}`
        },
        icon: getToastIcon('success'),
      },
      error: {
        render() {
          return `${options.error}`
        },
        icon: getToastIcon('error'),
      },
    })
  },
}
