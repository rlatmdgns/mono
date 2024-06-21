import * as Styles from './styles'
import { CheckBoxProps } from '@/shared/ui/CheckBox/CheckBox.interface'
import { ChangeEvent } from 'react'
import {
  CHECKBOX_CONTAINER_SIZE,
  CHECKBOX_IMAGE_SIZE,
  CHECKBOX_INNER_SIZE,
  CHECKBOX_WRAPPER_SIZE,
} from '@/shared/ui/CheckBox/CheckBox.constants'
import { Icon } from '@repo/ui'

export const CheckBox = ({
  name,
  disabled = false,
  isChecked,
  onChange,
  size = 'md',
  text,
}: CheckBoxProps) => {
  const wrapperSize = CHECKBOX_WRAPPER_SIZE[size]
  const containerSize = CHECKBOX_CONTAINER_SIZE[size]
  const innerSize = CHECKBOX_INNER_SIZE[size]
  const imageSize = CHECKBOX_IMAGE_SIZE[size]

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked)
  }

  return (
    <Styles.Wrapper>
      <Styles.Label $size={wrapperSize} $isChecked={isChecked} $disabled={disabled}>
        <Styles.Container $size={containerSize} $isChecked={isChecked}>
          <Styles.Inner $size={innerSize} $isChecked={isChecked}>
            <Styles.Input
              type="checkbox"
              name={name}
              disabled={disabled}
              defaultChecked={isChecked}
              onChange={handleInputChange}
            />
            {isChecked && <Icon icon="icon/check-line1" color="white" size={imageSize} />}
          </Styles.Inner>
        </Styles.Container>
      </Styles.Label>
      {text && <Styles.Text>{text}</Styles.Text>}
    </Styles.Wrapper>
  )
}
