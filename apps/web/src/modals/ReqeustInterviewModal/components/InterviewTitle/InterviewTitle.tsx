'use client'
import React from 'react'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'
import { Steps } from '@/entities/RequestInterview'
import { IconButton } from '@/shared/ui'

interface HeaderProps {
  title: string
  onClose: () => void
}

const InterviewTitle = ({ title, onClose }: HeaderProps) => {
  const $t = useTranslations('common')
  return (
    <Styles.InterviewHeader>
      <Styles.Title>{title}</Styles.Title>
      <Steps />
      <IconButton
        icon="icon/cancle-line1"
        onClick={onClose}
        ariaLabel={$t('common.close')}
        size="sm"
        color="neutralGray400"
      />
    </Styles.InterviewHeader>
  )
}

export default InterviewTitle
