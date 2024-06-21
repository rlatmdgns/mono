import { Dropdown } from '@/shared/ui'
import { Button } from '@repo/ui'
import { CopyScenarioButton } from './CopyScenarioButton'
import { DeleteScenarioButton } from './DeleteScenarioButton'
import { EditScenarioTitleButton } from './EditScenarioTitleButton'

interface ScenarioCardDropdownProps {
  id: number
  title: string
  description: string
  number: number
}

export const ScenarioCardDropdown = ({
  id,
  title,
  description,
  number,
}: ScenarioCardDropdownProps) => {
  return (
    <Dropdown
      button={
        <Button
          state={'secondary'}
          style={'mono'}
          leadingIcon={'icon/more-solid'}
          leadingIconColor={'neutralGray400'}
        />
      }
      direction="left"
      isAutoClose={true}
    >
      <EditScenarioTitleButton id={id} title={title} description={description} />
      <CopyScenarioButton id={id} />
      <Dropdown.Divider />
      <DeleteScenarioButton id={id} number={number} />
    </Dropdown>
  )
}
