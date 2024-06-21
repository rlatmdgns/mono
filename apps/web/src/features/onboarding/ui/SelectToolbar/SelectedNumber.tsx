import { numberStyle, numberText, selectedNumberWrapper } from './style.css'

interface SelectedNumberProps {
  number: number
}

export const SelectedNumber = ({ number }: SelectedNumberProps) => {
  return (
    <div className={selectedNumberWrapper}>
      <span className={numberStyle}>{number}</span>
      <span className={numberText}>선택됨</span>
    </div>
  )
}
