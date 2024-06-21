import React from 'react'
import OnBoardingScene from '@/entities/onboarding/ui/OnBoardingReportScene'
import { SceneReport } from '@/entities/onboarding/types/reports'
import { sceneList, wrapper } from '@/entities/onboarding/ui/OnBoardingReportScenes/styles.css'

interface OnBoardingReportScenesProps {
  scenes: SceneReport[]
  isOpen: boolean
}

const OnBoardingReportScenes = ({ scenes, isOpen }: OnBoardingReportScenesProps) => {
  if (!isOpen) {
    return null
  }
  return (
    <div className={wrapper}>
      <ul className={sceneList}>
        {scenes.map((scene) => (
          <OnBoardingScene key={scene.id} scene={scene} />
        ))}
      </ul>
    </div>
  )
}

export default OnBoardingReportScenes
