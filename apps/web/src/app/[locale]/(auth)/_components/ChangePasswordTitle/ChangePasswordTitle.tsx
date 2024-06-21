'use client'

import * as Styles from './styles'

interface PageTitleProps {
  title: string
  desc?: string
  icon?: string
}

const PageTitle = ({title, desc, icon}: PageTitleProps) => {
  return (
    <Styles.PageTitle>
      <Styles.Title $icon={icon}>{title}</Styles.Title>
      {desc && <Styles.Desc>{desc}</Styles.Desc>}
    </Styles.PageTitle>
  )
}

export default PageTitle
