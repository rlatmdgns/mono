'use client'

import { components, DropdownIndicatorProps } from 'react-select'
import * as Styles from './styles'
import { Icon } from '@repo/ui'
import React from 'react'

export const DropdownIndicator = (props: DropdownIndicatorProps) => {
  const getIconColor = () => {
    if (props.selectProps.isDisabled) {
      return 'neutralGray400'
    }
    if (props.selectProps.menuIsOpen) {
      return 'blue500'
    }
    return 'neutralGray800'
  }

  return (
    <components.DropdownIndicator {...props}>
      <Styles.DropdownIndicatorArrow $isMenuOpen={props.selectProps.menuIsOpen}>
        <Icon icon="icon/down-solid" color={getIconColor()} />
      </Styles.DropdownIndicatorArrow>
    </components.DropdownIndicator>
  )
}
