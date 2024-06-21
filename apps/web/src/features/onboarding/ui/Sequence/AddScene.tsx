import { Icon } from '@repo/ui'
import {
  addSceneTitleStyle,
  addSceneWrapper,
  descriptionStyle,
  iconWrapper,
  information,
} from '@/features/onboarding/ui/Sequence/styles.css'
import { IconNames } from "@repo/ui/src/components/Icon";

interface AddSceneProps {
  icon: IconNames
  title: string
  type: string
  description: string
  onClick: (type: string) => void
}

export const AddScene = ({icon, title, type, description, onClick}: AddSceneProps) => {
  return (
    <button className={addSceneWrapper} onClick={() => onClick(type)}>
      <div className={iconWrapper}>
        <Icon icon={icon}/>
      </div>
      <div className={information}>
        <p className={addSceneTitleStyle}>{title}</p>
        <p className={descriptionStyle}>{description}</p>
      </div>
    </button>
  )
}
