import { Dropdown } from '@/shared/ui'
import { Icon } from '@repo/ui'

interface CopyScenarioButtonProps {
  id: number
}

export const CopyScenarioButton = ({ id }: CopyScenarioButtonProps) => {
  const handleClick = () => {
    // TODO: 시나리오 복사 로직
  }

  return (
    <Dropdown.Item onClick={handleClick}>
      <Icon icon="icon/copy-line" color="neutralGray700" />
      복사
    </Dropdown.Item>
  )
}
