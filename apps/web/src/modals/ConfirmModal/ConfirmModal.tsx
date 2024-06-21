'use client'

import * as Styles from './styles'
import { Button, ModalLayout } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { ConfirmModalProps } from '@/modals/ConfirmModal/ConfirmModal.interface'
import { useTranslations } from 'next-intl'

const ConfirmModal = ({
  state = 'negative',
  iconSource,
  title,
  subtitle,
  textCancel,
  textConfirm,
  onClick,
  onClose,
  children,
  width,
}: ConfirmModalProps) => {
  const $t = useTranslations('common')
  const iconColor = state === 'negative' ? 'red500' : 'blue500'
  const handleConfirm = () => onClick()
  const handleCancel = () => onClose()

  return (
    <ModalLayout onClick={onClose} isDimmed>
      <Styles.Wrapper $width={width}>
        <Styles.QuestionContainer>
          {iconSource && (
            <Styles.IconContainer state={state}>
              <Icon icon={iconSource} color={iconColor} size={36} />
            </Styles.IconContainer>
          )}
          <Styles.TitleAndSubtitle>
            <Styles.Title>{title}</Styles.Title>
            {subtitle && <Styles.Subtitle>{subtitle}</Styles.Subtitle>}
          </Styles.TitleAndSubtitle>
        </Styles.QuestionContainer>
        {children}
        <Styles.ButtonContainer>
          <Button
            state="standard"
            size="md"
            width="100%"
            text={!textCancel ? $t('cancel') : textCancel}
            onClick={handleCancel}
          />
          <Button
            state={state === 'negative' ? 'warning' : 'primary'}
            size="md"
            width="100%"
            text={!textConfirm ? $t('confirm') : textConfirm}
            onClick={handleConfirm}
          />
        </Styles.ButtonContainer>
      </Styles.Wrapper>
    </ModalLayout>
  )
}

export default ConfirmModal
