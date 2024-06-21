import * as Styles from '@/widgets/Application/ui/ResumeForm/styles'
import React from 'react'

interface RequiredTextProps {
  title: string
  isRequired: boolean
}

export const RequiredText = ({ title, isRequired }: RequiredTextProps) => {
  return (
    <Styles.TitleWrapper>
      <Styles.Title>{title}</Styles.Title>
      {isRequired && <Styles.RequiredMark>*</Styles.RequiredMark>}
    </Styles.TitleWrapper>
  )
}
