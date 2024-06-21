import React from 'react'
import {
  date,
  header,
  sceneItem,
  statusBox,
  title,
} from '@/entities/onboarding/ui/OnBoardingReportScene/styles.css'
import { SceneReport } from '@/entities/onboarding/types/reports'
import ReportSceneStatus from '@/entities/onboarding/ui/OnBoardingReportScene/ReportSceneStatus'
import ReportSceneManager from '@/entities/onboarding/ui/OnBoardingReportScene/ReportSceneMananger'

interface OnBoardingReportSceneProps {
  scene: SceneReport
}

const OnBoardingReportScene = ({ scene }: OnBoardingReportSceneProps) => {
  return (
    <li className={sceneItem}>
      <div className={header}>
        <div>
          <span className={date}>3월 14일</span>
          <p className={title}>입사 전 계약서 작성</p>
        </div>
      </div>
      <div className={statusBox}>
        <ReportSceneStatus status={scene.status} />
        <ReportSceneManager managers={scene.managers} />
      </div>
    </li>
  )
}

export default OnBoardingReportScene
