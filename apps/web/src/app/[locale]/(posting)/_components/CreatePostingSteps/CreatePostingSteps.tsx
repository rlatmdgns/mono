'use client'

import React from 'react'
import * as Styles from './styles'
import { STEPS } from '@/app/[locale]/(posting)/_components/CreatePostingSteps/CreatePostingSteps.constants'
import { useLocale } from 'next-intl'

interface CreatePostingStepsProps {
  currentStep: number
}

const CreatePostingSteps = ({ currentStep }: CreatePostingStepsProps) => {
  const currentLocale = useLocale()
  return (
    <Styles.List>
      {STEPS[currentLocale].map((step) => {
        const isActive = currentStep >= step.id
        return (
          <Styles.ListItem key={step.id} $isActive={isActive}>
            <Styles.Order $isActive={isActive}>{step.id}</Styles.Order>
            {step.title}
          </Styles.ListItem>
        )
      })}
    </Styles.List>
  )
}

export default CreatePostingSteps
