'use client'

import React, { useState } from 'react'
import { InputModalProps } from './InputModal.interface'
import { Button, LabelInput, ModalLayout } from '@/shared/ui'
import { Icon } from '@repo/ui'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

const InputModal = ({
  title,
  subtitle,
  isInfo = false,
  value,
  placeholder,
  onChange,
  onSubmit,
  onClose,
  maxLength,
  textSubmit = '저장하기',
  state,
  guideText,
  disabled,
}: InputModalProps) => {
  const $t = useTranslations()
  const [inputValue, setInputValue] = useState(value || '')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event)
    }

    setInputValue(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(inputValue)
  }

  const handleClose = () => {
    setInputValue('')
    onClose()
  }

  return (
    <ModalLayout isDimmed>
      <Styles.Wrapper onSubmit={handleSubmit}>
        <Styles.Header>
          <Styles.HeaderTitle>{title}</Styles.HeaderTitle>
          {isInfo && <Icon icon="icon/info-solid" color="neutralGray300" />}
        </Styles.Header>
        <Styles.Contents>
          <Styles.InputContainer>
            <LabelInput
              label={subtitle}
              value={inputValue}
              placeholder={placeholder}
              onChange={handleChange}
              maxLength={maxLength}
              state={state}
              guideText={guideText}
            />
          </Styles.InputContainer>
        </Styles.Contents>
        <Styles.Bottom>
          <Button
            text={$t('common.cancel')}
            size="sm"
            state="standard"
            style="mono"
            width="fit-content"
            onClick={handleClose}
          />
          <Button text={textSubmit} size="sm" width="74px" type="submit" disabled={disabled} />
        </Styles.Bottom>
      </Styles.Wrapper>
    </ModalLayout>
  )
}

export default InputModal
