'use client'

import * as Styles from './styles'

interface RecruitLayoutProps {
  children: React.ReactNode
}

const RecruitLayout = ({ children }: RecruitLayoutProps) => {
  return (
    <Styles.Wrapper>
      <Styles.Container>{children}</Styles.Container>
    </Styles.Wrapper>
  )
}

export default RecruitLayout
