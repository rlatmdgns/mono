import React from 'react'
import { wrapper } from '@/entities/onboarding/ui/OnBoardingReportRowHeader/styles.css'

interface OnBoardingReportHeaderProps {}

const OnBoardingReportRowHeader = ({}: OnBoardingReportHeaderProps) => {
  return (
    <div className={wrapper}>
      <div>이름</div>
      <div>적용중인 시나리오</div>
      <div>시나리오 실행일</div>
      <div>진행 현황</div>
      <div>제출한 설문, 평가</div>
    </div>
  )
}
export default OnBoardingReportRowHeader
