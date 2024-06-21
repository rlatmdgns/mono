import React from 'react'

export interface TextareaProps {
  value?: string
  defaultValue?: string
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  maxLength?: number
  rows?: number
  placeholder?: string
  disabled?: boolean
  register?: unknown
  state?: 'success' | 'error'
}

export interface LabelTextareaProps extends TextareaProps {
  label: string
  supportiveText?: string
}
