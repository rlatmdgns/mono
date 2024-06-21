'use client'
import * as Styles from '../../styles'
import { GuideStepAtom } from '@/features/Guide/recoil/atom'
import { useRecoilState } from 'recoil'
import { Icon } from '@repo/ui'
import React from 'react'

const GuidePrevButton = () => {
  const [detailStep, setDetailStep] = useRecoilState(GuideStepAtom)

  const onClick = () => {
    if (detailStep === 0) return
    setDetailStep(detailStep - 1)
  }

  return detailStep === 1 ? (
    <Styles.GuideStepDummy />
  ) : (
    <Styles.GuideStepButton type="button" $isDeltaX={'prev'} onClick={onClick}>
      <Icon icon="icon/right-line" color="neutralGray400" size={24} />
      Back
    </Styles.GuideStepButton>
  )
}

export default GuidePrevButton
