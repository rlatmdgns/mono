import { CheckBox } from '@repo/ui'
import { descStyle, item, titleStyle, topWrapper } from './styles.css'

interface ApplyScenarioItemProps {
  id: number
  title: string
  desc: string
}

export const ApplyScenarioItem = ({ id, title, desc }: ApplyScenarioItemProps) => {
  const isChecked = true

  return (
    <li className={item}>
      <div className={topWrapper}>
        {/* <Controller
          // TODO: name 변경 필요
          name="scenario"
          control={control}
          render={({ field: { onChange, value } }) => (
            <CheckBox isChecked={value} onChange={(option) => onChange(option)} />
          )}
        /> */}
        <CheckBox isChecked={isChecked} onChange={() => {}} />
        <span className={titleStyle}>{title}</span>
      </div>
      <p className={descStyle}>{desc}</p>
    </li>
  )
}
