import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { Dropdown } from '@/shared/ui'
import { Icon } from '@repo/ui'

interface EditScenarioTitleButtonProps {
  id: number
  title: string
  description: string
}

export const EditScenarioTitleButton = ({
  id,
  title,
  description,
}: EditScenarioTitleButtonProps) => {
  const { openModal, closeModal } = useModal()

  const handleClick = () => {
    openModal(MODAL.EDIT_SCENARIO_TITLE, {
      id,
      title,
      description,
      onClose: () => {
        closeModal(MODAL.EDIT_SCENARIO_TITLE)
      },
    })
  }

  return (
    <Dropdown.Item onClick={handleClick} testId={'modify_scenario_button'}>
      <Icon icon="icon/edit-line" color="neutralGray700" />
      시나리오명 수정
    </Dropdown.Item>
  )
}
