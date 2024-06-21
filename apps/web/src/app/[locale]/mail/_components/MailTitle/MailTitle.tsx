'use client'

import React from 'react'
import * as Styles from './styles'

interface MailTitleProps {
  title: string
}

const MailTitle = ({ title }: MailTitleProps) => {
  return <Styles.Title>{title}</Styles.Title>
}

export default MailTitle
