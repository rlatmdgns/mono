import { number, title, wrapper } from './styles.css'
import { Button } from '@repo/ui'
import { PAGE } from '@/shared/constants'

interface ScenariosHeaderProps {
  count: number
}

export const ScenariosHeader = ({ count }: ScenariosHeaderProps) => {
  return (
    <div className={wrapper}>
      <h1 className={title}>
        시나리오<span className={number}>({count || 0})</span>
      </h1>
      <Button
        href={PAGE.CREATE_SCENARIO}
        text="시나리오 만들기"
        leadingIcon="icon/plus-line"
        isNewTab={false}
      />
    </div>
  )
}
