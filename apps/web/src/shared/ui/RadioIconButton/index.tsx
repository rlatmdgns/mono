'use client'

import * as Styles from './styles'
import { SIZE_OPTIONS, STATE_OPTIONS } from './RadioIconButton.constants'
import React from 'react'

interface RadioIconButtonProps {
  checked?: boolean
  state?: 'positive' | 'negative' | 'default'
  size?: 'sm' | 'md'
  isLeft?: boolean
  name: string
  labelText?: string
  onChange: () => void
  value?: string
}

export const RadioIconButton = ({
  checked,
  name,
  labelText,
  onChange,
  isLeft = false,
  state = 'default',
  size = 'sm',
  value,
}: RadioIconButtonProps) => {
  const sizeOptions = SIZE_OPTIONS[size]
  const colors = STATE_OPTIONS[state]

  return (
    <Styles.Wrapper>
      <Styles.InputWrapper>
        {!labelText && (
          <Styles.Label>
            <Styles.Radio
              $checked={checked}
              $size={sizeOptions.size}
              $unselectedBackground={colors.unselectedBackground}
              $selectedBackground={colors.selectedBackground}
              $dotColor={colors.dotColor}
              $dotSize={sizeOptions.dotSize}
              $positionX={sizeOptions.positionX}
            />
            <Styles.Input
              name={name}
              checked={checked}
              onChange={onChange}
              type="radio"
              value={value}
            />
          </Styles.Label>
        )}

        {labelText && (
          <Styles.Label>
            <Styles.Radio
              $checked={checked}
              $size={sizeOptions.size}
              $unselectedBackground={colors.unselectedBackground}
              $selectedBackground={colors.selectedBackground}
              $dotColor={colors.dotColor}
              $dotSize={sizeOptions.dotSize}
              $positionX={sizeOptions.positionX}
            />
            {isLeft && labelText}
            <Styles.Input
              name={name}
              checked={checked}
              onChange={onChange}
              type="radio"
              value={value}
            />
            {!isLeft && labelText}
          </Styles.Label>
        )}
      </Styles.InputWrapper>
    </Styles.Wrapper>
  )
}
