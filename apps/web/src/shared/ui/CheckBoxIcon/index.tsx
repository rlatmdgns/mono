import * as Styles from './styles'
import React from 'react'

interface CheckBoxProps {
  checked?: boolean
  onClick?: () => void
}

export const CheckBoxIcon = ({ checked, onClick }: CheckBoxProps) => {
  return <Styles.CheckBoxIcon $checked={checked} onClick={onClick} />
}
