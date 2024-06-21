import { Button } from '@repo/ui'
import {
  addSceneHeaderWrapper,
  header,
  headerTitle,
} from '@/features/onboarding/ui/Sequence/styles.css'

interface AddSceneHeaderProps {
  onClose: () => void
}

export const AddSceneHeader = ({ onClose }: AddSceneHeaderProps) => {
  return (
    <div className={addSceneHeaderWrapper}>
      <div className={header}>
        <span className={headerTitle}>추가</span>
        {/*TODO : 버튼 사이즈 하나 더 추가해야됨 */}
        <Button
          size="xs"
          state="secondary"
          style="mono"
          leadingIcon="icon/cancle-line1"
          leadingIconColor="neutralGray400"
          onClick={onClose}
        />
      </div>
    </div>
  )
}
