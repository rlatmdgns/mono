'use client'

import * as Styles from './styles'

interface ApplicationHeaderProps {
  postingTitle?: string
}

export const ApplicationHeader = ({ postingTitle }: ApplicationHeaderProps) => {
  return (
    <Styles.Header>
      <Styles.Title>지원서 작성하기</Styles.Title>
      {postingTitle && <Styles.Posting>{postingTitle}</Styles.Posting>}
    </Styles.Header>
  )
}
