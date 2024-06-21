'use client'

import { ChangeEvent } from 'react'
import { SwitchProps } from './Switch.interface'
import { switchInput, switchLabel, switchToggle } from './styles.css'

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

  const switchToggleEnd = {
    xs: 16,
    sm: 24,
    md: 32,
    lg: 40,
  }

  return (
    <label
      className={switchLabel({
        size,
        isChecked,
        isDisabled,
      })}
    >
      <input
        role="switch"
        type="checkbox"
        name={name}
        className={switchInput}
        disabled={isDisabled}
        defaultChecked={isChecked}
        onChange={handleInputChange}
      />
      <div
        className={switchToggle({
          size,
          isDisabled,
        })}
        style={{
          right: isChecked ? '10%' : `calc(78% - ${switchToggleEnd[size] / 2}px)`,
        }}
      />
    </label>
  )
}
