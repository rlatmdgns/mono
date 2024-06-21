import { CheckBox, Tooltip } from '@repo/ui'

type ApplyFreshmanCheckBoxProps = {
  index: number
  is_checked: boolean
  is_disabled: boolean
  onCheck: (index: number) => void
}
export const ApplyFreshmanCheckBox = ({
  index,
  is_checked,
  is_disabled,
  onCheck,
}: ApplyFreshmanCheckBoxProps) => {
  const is_sequence_passed_date = is_disabled && is_checked
  const handleChange = () => {
    onCheck(index)
  }

  if (is_sequence_passed_date) {
    return (
      <Tooltip text="온보딩 진행중인 입사자는 해제가 불가합니다.">
        <CheckBox isChecked={true} disabled={is_sequence_passed_date} />
      </Tooltip>
    )
  }

  return (
    <div onClick={handleChange}>
      <CheckBox isChecked={is_checked} disabled={is_disabled} />
    </div>
  )
}
