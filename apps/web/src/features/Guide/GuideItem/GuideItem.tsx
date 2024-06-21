import * as Styles from './styles'
import Link from 'next/link'
import { PAGE } from '@/shared/constants'
import { Icon } from '@repo/ui'
import React from 'react'

interface GuideItemProps {
  title: string
  id: string
  handleGuideContentGet: (value: string) => void
}

const GuideItem = ({ title, id, handleGuideContentGet }: GuideItemProps) => {
  return (
    <Styles.GuideItem>
      {id !== 'detail' && (
        <Styles.GuideButton
          type="button"
          onClick={() => {
            handleGuideContentGet(id)
          }}
        >
          <Icon icon="icon/check-line1" color="white" size={24} />
          {title}
        </Styles.GuideButton>
      )}
      {id === 'detail' && (
        <Styles.GuideButton as="div">
          <Link href={PAGE.NOTION_URL} target="_blank">
            <Icon icon="icon/right-line" color="white" size={24} />
            {title}
          </Link>
        </Styles.GuideButton>
      )}
    </Styles.GuideItem>
  )
}

{
  /*return window.open(, '_blank')*/
}

export default GuideItem
