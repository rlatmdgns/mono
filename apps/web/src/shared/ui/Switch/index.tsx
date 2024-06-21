'use client'

import { ChangeEvent } from 'react'
import { SIZE_OPTIONS } from './Switch.constants'
import { SwitchProps } from './Switch.interface'
import * as Styles from './styles'

export const Switch = ({
  name,
  size = 'md',
  isDisabled = false,
  isChecked,
  onChange,
}: SwitchProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked)
  }

  const getLabelBackgroundColor = () => {
    if (isChecked) {
      return 'blue500'
    }

    return 'neutralGray200'
  }

  return (
    <Styles.Label
      $size={size}
      $isDisabled={isDisabled}
      $backgroundColor={getLabelBackgroundColor()}
      $width={SIZE_OPTIONS.width}
      $height={SIZE_OPTIONS.height}
    >
      <Styles.Input
        role="switch"
        type="checkbox"
        name={name}
        disabled={isDisabled}
        checked={isChecked}
        onChange={handleInputChange}
      />
      <Styles.Toggle
        $size={size}
        $isChecked={isChecked}
        $isDisabled={isDisabled}
        $transformX={SIZE_OPTIONS.transformX}
        $toggle={SIZE_OPTIONS.toggle}
      />
    </Styles.Label>
  )
}
