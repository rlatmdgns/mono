import { tableHeader, tableHeaderCell } from './styles.css'
import { CheckBox } from '@repo/ui'
import { Freshman, FreshMenControl } from '@/entities/onboarding/types/freshman'
import { Controller } from 'react-hook-form'

interface FreshManTableHeaderProps {
  onboardingFreshman: Freshman[]
  control: FreshMenControl
}

export const FreshManTableHeader = ({ onboardingFreshman, control }: FreshManTableHeaderProps) => {
  const cells = ['이름', '공고명', '이메일', '전화 번호', '합격일', '입사일', '적용된 시나리오']
  return (
    <div className={tableHeader}>
      <Controller
        name="freshmen"
        control={control}
        render={({ field }) => {
          const isChecked =
            field.value?.length === onboardingFreshman.length && onboardingFreshman.length > 0
          const onboardingFreshmen = onboardingFreshman.map(({ id, scenarios }) => {
            return { id, scenarios }
          })
          const onChange = () => field.onChange(isChecked ? [] : onboardingFreshmen)

          return <CheckBox isChecked={isChecked} onChange={onChange} />
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
