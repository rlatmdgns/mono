'use client'
import { SCENES } from '@/widgets/onboarding/constants'
import { AddScene, AddSceneHeader } from '@/features/onboarding/ui'
import { scenes, scenesWrapper } from '@/features/onboarding/ui/Sequence/styles.css'
import { IconNames } from "@repo/ui/src/components/Icon";

interface AddScenesProps {
  onClose: () => void
  onAddScene: (type: string) => void
}

export const AddScenes = ({onClose, onAddScene}: AddScenesProps) => {
  return (
    <div className={scenesWrapper}>
      <AddSceneHeader onClose={onClose}/>
      <ul className={scenes}>
        {SCENES.map((scene) => {
          return (
            <li key={scene.type}>
              <AddScene
                type={scene.type}
                icon={scene.icon as IconNames}
                title={scene.title}
                description={scene.description}
                onClick={onAddScene}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
