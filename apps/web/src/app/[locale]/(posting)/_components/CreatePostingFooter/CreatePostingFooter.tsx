'use client'

import { creatPostingStepAtom } from '@/app/[locale]/(posting)/create-posting/_recoil'
import { Button } from '@/shared/ui'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useRecoilState } from 'recoil'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

const CreatePostingFooter = () => {
  const $t = useTranslations('common')
  const router = useRouter()
  const [step, setStep] = useRecoilState(creatPostingStepAtom)
  const isFirstStep = step === 1
  const isLastStep = step === 3

  const handleCancel = () => {
    if (isFirstStep) {
      return router.back()
    }
    setStep(1)
  }

  if (isLastStep) {
    return null
  }
  return (
    <Styles.Footer>
      <Styles.Right>
        <Button
          text={$t('cancel')}
          width="98px"
          state="standard"
          style="mono"
          onClick={handleCancel}
        />
        <Button
          type="submit"
          text={isFirstStep ? $t('next') : $t('creation')}
          width="98px"
          state="primary"
          style="fill-strong"
        />
      </Styles.Right>
    </Styles.Footer>
  )
}

export default CreatePostingFooter
