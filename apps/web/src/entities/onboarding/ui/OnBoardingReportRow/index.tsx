import { FreshmanReport } from '@/entities/onboarding/types/reports'
import { ProgressBar } from '@/entities/onboarding/ui/OnBoardingReportRow/ProgressBar'
import {
  inner,
  name,
  rowItem,
  scenarioBox,
} from '@/entities/onboarding/ui/OnBoardingReportRow/styles.css'
import ReportScenarioList from '@/entities/onboarding/ui/OnBoardingReportScene/ReportScenarioList'
import OnBoardingReportScenes from '@/entities/onboarding/ui/OnBoardingReportScenes'
import { OnboardingReportEvaluationBar } from '@/widgets/onboarding/ui/OnboardingReportEvaluationBar'
import { Button, Icon } from '@repo/ui'
import { useState } from 'react'

interface OnBoardingReportRowProps {
  freshman: FreshmanReport
}

export const OnBoardingReportRow = ({ freshman }: OnBoardingReportRowProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isActive, setIsActive] = useState(false)

  const handleToggle = () => setIsOpen(!isOpen)

  const handleEvaluationBar = () => setIsActive((state) => !state)

  return (
    <div className={rowItem({ isOpen })}>
      <div className={inner}>
        <div className={name} onClick={handleToggle}>
          <Icon icon={isOpen ? 'icon/down-solid' : 'icon/right-solid'} color="neutralGray800" />
          홍길동
        </div>
        <div className={scenarioBox}>
          <ReportScenarioList scenarios={freshman.scenarios} />
        </div>
        <div>24년 3월 21일</div>
        <div>
          <ProgressBar total={freshman.total} complete={freshman.complete} />
        </div>
        <div>
          <Button
            text="확인하기"
            size="sm"
            style="line"
            state="secondary"
            onClick={handleEvaluationBar}
          />
        </div>
      </div>
      <OnBoardingReportScenes scenes={freshman.scenes} isOpen={isOpen} />
      <OnboardingReportEvaluationBar isActive={isActive} onClose={handleEvaluationBar} />
    </div>
  )
}
