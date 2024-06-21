'use client'

import * as Styles from './styles'
import { TextInput } from '@/shared/ui'
import { LabelInputProps } from './LabelInput.interface'
import { Icon } from '@repo/ui'

export const LabelInput = ({
  label,
  labelTextSize = 'md',
  isLabelRequired = false,
  guideText,
  type = 'text',
  state = 'success',
  value,
  placeholder,
  width = '100%',
  onClick,
  onChange,
  onKeyUp,
  register,
  pattern,
  maxLength,
  disabled = false,
  isReadOnly = false,
  icon,
}: LabelInputProps) => {
  const iconColor = state === 'error' ? 'red500' : 'neutralGray400'

  return (
    <Styles.Wrapper>
      <Styles.Label>
        {label && (
          <Styles.TextContainer>
            {icon}
            <Styles.Text $labelTextSize={labelTextSize}>{label}</Styles.Text>
            {isLabelRequired && <Styles.RequiredMark>*</Styles.RequiredMark>}
          </Styles.TextContainer>
        )}
        <TextInput
          width={width}
          state={state}
          type={type}
          value={value}
          placeholder={placeholder}
          onClick={onClick}
          onChange={onChange}
          onKeyUp={onKeyUp}
          pattern={pattern}
          disabled={disabled}
          register={register}
          maxLength={maxLength}
          isReadOnly={isReadOnly}
        />
      </Styles.Label>
      {guideText && (
        <Styles.GuideContainer>
          <Icon icon="icon/info-solid" color={iconColor} size={14} />
          <Styles.guideText $state={state}>{guideText}</Styles.guideText>
        </Styles.GuideContainer>
      )}
    </Styles.Wrapper>
  )
}
