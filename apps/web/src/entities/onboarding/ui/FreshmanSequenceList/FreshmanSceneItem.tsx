'use client'

import { Toast } from '@/shared/ui'
import { convertDate, isDatePassed, isDateToday } from '../../lib'
import { GuideScene } from '../../types'
import { StatusIcon } from './StatusIcon'
import { contentWrapper, item, status, statusWrapper, title } from './styles.css'

interface FreshmanSceneItemProps {
  scene: GuideScene
}

export const FreshmanSceneItem = ({ scene }: FreshmanSceneItemProps) => {
  const isPast = isDatePassed(scene.due_date)
  const isToday = isDateToday(scene.due_date)
  const isFuture = !isToday && !isPast
  const date = scene.is_completed ? '완료' : convertDate(scene.due_date)

  const handleClick = () => {
    if (isFuture) {
      return Toast.error('해당 작업은 현재 열람이 불가합니다.')
    }

    // TODO: 클릭 시 상세 페이지로 렌더링
  }

  return (
    <li className={item} onClick={handleClick}>
      <div className={statusWrapper}>
        <StatusIcon
          isCompleted={scene.is_completed}
          isPast={isPast}
          isToday={isToday}
          isFuture={isFuture}
        />
      </div>
      <div className={contentWrapper}>
        <span className={title}>{scene.title}</span>
        <span className={status({ isToday })}>{date}</span>
      </div>
    </li>
  )
}
