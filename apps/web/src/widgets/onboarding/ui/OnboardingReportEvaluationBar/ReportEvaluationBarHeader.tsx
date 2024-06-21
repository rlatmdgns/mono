import { Button } from '@repo/ui'
import { buttons, header, headerTitle } from './styles.css'

interface ReportEvaluationBarHeaderProps {
  name: string
  onClose: () => void
}

export const ReportEvaluationBarHeader = ({ name, onClose }: ReportEvaluationBarHeaderProps) => {
  return (
    <div className={header}>
      <span className={headerTitle}>{name} 제출 설문 및 평가</span>
      <div className={buttons}>
        <Button
          leadingIcon="icon/left-line"
          leadingIconColor="neutralGray800"
          state="secondary"
          style="mono"
          size="sm"
        />
        <Button
          leadingIcon="icon/right-line"
          leadingIconColor="neutralGray800"
          state="secondary"
          style="mono"
          size="sm"
        />
        <Button
          leadingIcon="icon/cancle-line1"
          leadingIconColor="neutralGray400"
          state="secondary"
          style="mono"
          size="sm"
          onClick={onClose}
        />
      </div>
    </div>
  )
}
