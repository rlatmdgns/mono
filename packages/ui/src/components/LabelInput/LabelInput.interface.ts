import { TextInputProps } from '../TextInput/TextInput.interface'
import React from 'react'

export interface LabelInputProps extends TextInputProps {
  label?: string
  labelTextSize?: 'md' | 'lg'
  isLabelRequired?: boolean
  guideText?: string
  isReadOnly?: boolean
  icon?: React.ReactNode
  register?: any
}
