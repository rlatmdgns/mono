import { useModal } from '@/shared/hooks'
import { MODAL } from '@/shared/constants'
import { IconButton } from '@/shared/ui'
import { withAuth } from '@/shared/lib'
import React from 'react'

const CreateScheduleButtonContent = () => {
  const { openModal } = useModal()

  const handleClick = () => {
    openModal(MODAL.CREATE_SCHEDULE)
  }

  return <IconButton icon="icon/add-solid" size="md" state="primary" onClick={handleClick} />
}

const CreateScheduleButton = withAuth(CreateScheduleButtonContent)

export { CreateScheduleButton }
