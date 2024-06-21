import React from 'react'
import { IconNames } from "@repo/ui/src/components/Icon";

export interface ConfirmModalProps {
  state?: 'positive' | 'negative'
  iconSource?: IconNames
  title: string
  subtitle?: string
  textCancel?: string
  textConfirm?: string
  onClick: () => void
  onClose: () => void
  children?: React.ReactNode
  width?: string
}
