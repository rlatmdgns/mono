import { tableHeader, tableHeaderCell } from './styles.css'
import { CheckBox } from '@repo/ui'
import { Controller, useFormContext } from 'react-hook-form'

type ApplyFreshManTableHeaderProps = {
  onAllCheck: () => void
}

export const ApplyFreshManTableHeader = ({ onAllCheck }: ApplyFreshManTableHeaderProps) => {
  const { control } = useFormContext()
  const cells = ['이름', '공고명', '연락처', '이메일']

  return (
    <div className={tableHeader}>
      <Controller
        name="allCheck"
        control={control}
        render={({ field: { value, onChange } }) => {
          const onAllChange = () => {
            onChange(!value)
            onAllCheck()
          }
          return <CheckBox isChecked={value} onChange={onAllChange} />
        }}
      />
      {cells.map((cell: string) => (
        <span key={cell} className={tableHeaderCell}>
          {cell}
        </span>
      ))}
    </div>
  )
}
