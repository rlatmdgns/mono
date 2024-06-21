'use client'

import { Button } from '@/shared/ui'
import { PAGE } from '@/shared/constants'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import * as Styles from './styles'
import { creatPostingStepAtom } from '@/app/[locale]/(posting)/create-posting/_recoil'
import CreatePostingSteps from '@/app/[locale]/(posting)/_components/CreatePostingSteps'
import { useTranslations } from 'next-intl'

const CreatePostingHeader = () => {
  const { getValues } = useFormContext()
  const $t = useTranslations()
  const currentStep = useRecoilValue(creatPostingStepAtom)
  const handlePreview = () => {
    const preview = JSON.stringify({
      ...getValues(),
      posting_field: getValues('posting_field')?.label,
    })
    sessionStorage.setItem('preview', preview)
    window.open(PAGE.PREVIEW_RECRUIT)
  }

  return (
    <>
      <Styles.Header>
        <Styles.Title>{$t('page.making_notification')}</Styles.Title>
        <CreatePostingSteps currentStep={currentStep} />
        <Styles.Right>
          {currentStep === 1 && (
            <Button
              iconSource="icon/show-solid"
              text={$t('common.preview')}
              width="96px"
              style="line"
              state="standard"
              onClick={handlePreview}
            />
          )}
        </Styles.Right>
      </Styles.Header>
      <Styles.ProgressBar $step={currentStep} />
    </>
  )
}

export default CreatePostingHeader
