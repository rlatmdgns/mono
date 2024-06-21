import * as Styles from './styles'
import { Button, ModalLayout, RadioIconButton, TextInput } from '@/shared/ui'
import React, { useState } from 'react'
import {
  ConfirmRadioModalOption,
  ConfirmRadioModalProps,
} from '@/modals/ConfirmRadioModal/ConfirmRadioModal.interface'

import { useTranslations } from 'next-intl'
import { Icon } from '@repo/ui'

const ConfirmRadioModal = ({
  state = 'negative',
  iconSource,
  title,
  subtitle,
  textCancel,
  textConfirm,
  onSubmit,
  onClose,
  options,
}: ConfirmRadioModalProps) => {
  const [active, setActive] = useState(options[0].label)
  const [value, setValue] = useState(options[0].label)
  const $t = useTranslations()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(value)
  }

  const handleClose = () => {
    setValue('')
    onClose()
  }

  const handleClick = (option: ConfirmRadioModalOption) => {
    if (!option.isDirectInput) {
      setActive(option.label)
      setValue(option.label)
      return
    }
    setValue('')
    setActive(option.label)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <ModalLayout isDimmed>
      <Styles.Wrapper onSubmit={handleSubmit}>
        <Styles.QuestionContainer>
          {iconSource && (
            <Styles.IconContainer $state={state}>
              <Icon
                icon={iconSource}
                color={state === 'negative' ? 'red500' : 'blue500'}
                size={36}
              />
            </Styles.IconContainer>
          )}
          <Styles.TitleAndSubtitle>
            <Styles.Title>{title}</Styles.Title>
            {subtitle && <Styles.Subtitle>{subtitle}</Styles.Subtitle>}
          </Styles.TitleAndSubtitle>
        </Styles.QuestionContainer>
        <Styles.RadioContainer>
          {options.map((option, index) => {
            const selected = active === option.label
            return (
              <Styles.RadioItem key={index} $state={state} $selected={selected}>
                <Styles.RadioLabel>
                  <RadioIconButton
                    state={state}
                    name="confirm_radio"
                    checked={selected}
                    onChange={() => handleClick(option)}
                  />
                  <Styles.RadioText $selected={selected}>{option.label}</Styles.RadioText>
                </Styles.RadioLabel>
                {selected && option.isDirectInput && (
                  <Styles.RadioTextInputBox>
                    <TextInput
                      value={value}
                      onChange={handleInputChange}
                      placeholder={$t('messages.text_input')}
                    />
                  </Styles.RadioTextInputBox>
                )}
              </Styles.RadioItem>
            )
          })}
        </Styles.RadioContainer>
        <Styles.ButtonContainer>
          <Button
            state="standard"
            size="md"
            width="100%"
            text={!textCancel ? $t('common.close') : textCancel}
            onClick={handleClose}
          />
          <Button
            type="submit"
            state={state === 'negative' ? 'warning' : 'primary'}
            size="md"
            width="100%"
            text={!textConfirm ? $t('common.confirm') : textConfirm}
          />
        </Styles.ButtonContainer>
      </Styles.Wrapper>
    </ModalLayout>
  )
}

export default ConfirmRadioModal
