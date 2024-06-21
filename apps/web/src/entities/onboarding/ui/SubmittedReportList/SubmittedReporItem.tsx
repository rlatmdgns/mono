import { Button, Icon } from '@repo/ui'
import { useState } from 'react'
import { SubmittedReportContentList } from './SubmittedReportContentList'
import {
  iconWrapper,
  itemWrapper,
  nameStyle,
  rightWrapper,
  textWrapper,
  titleStyle,
  wrapper,
} from './styles.css'

interface SubmittedReporItemProps {
  name: string
  title: string
  date: string
  type: 'evaluation' | 'survey'
  surveys?: any[]
}

export const SubmittedReporItem = ({
  name,
  title,
  date,
  type,
  surveys,
}: SubmittedReporItemProps) => {
  const [isToggle, setIsToggle] = useState(false)

  const icon = type === 'evaluation' ? 'icon/assessment-line' : 'icon/Q&A-line'
  const toggleIcon = isToggle ? 'icon/up-line' : 'icon/down-line'

  const handleToggle = () => {
    if (!surveys) return
    setIsToggle((state) => !state)
  }

  return (
    <li className={wrapper}>
      <div className={itemWrapper}>
        <div className={iconWrapper}>
          <Icon icon={icon} color="neutralGray800" />
        </div>
        <div className={rightWrapper}>
          <div className={textWrapper}>
            <span className={titleStyle}>{title}</span>
            <span className={nameStyle}>
              {name} ‧ {date}
            </span>
          </div>
          <Button
            leadingIcon={toggleIcon}
            state="secondary"
            style="mono"
            size="sm"
            onClick={handleToggle}
          />
        </div>
      </div>
      <SubmittedReportContentList surveys={surveys} isToggle={isToggle} />
    </li>
  )
}
