import * as Styles from './styles'
import React from 'react'

interface ApplicantFileHeaderProps {
  title: string
  children?: React.ReactNode
}

const ApplicantFileHeader = ({ title, children }: ApplicantFileHeaderProps) => {
  return (
    <Styles.Header>
      <Styles.HeaderTitle>{title}</Styles.HeaderTitle>
      {children}
    </Styles.Header>
  )
}

export default ApplicantFileHeader
