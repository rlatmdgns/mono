'use client'

import MailTemplatePreview from '@/app/[locale]/settings/template/_components/MailTemplatePreview/MailTemplatePreview'
import PostingTemplatePreview from '@/app/[locale]/settings/template/_components/PostingTemplatePreview'
import EvaluationTemplatePreview from '@/app/[locale]/settings/template/_components/EvaluationTemplatePreview'
import { ApplicationTemplatePreview } from '@/app/[locale]/settings/template/_components/ApplicationTemplatePreview'
import { settingTemplateIdAtom } from '@/app/[locale]/settings/template/_recoil/atom'
import { useTemplateContent } from '@/shared/hooks'
import { selectedTabState } from '@/shared/ui/Tabs/atom'
import React, { useEffect } from 'react'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import * as Styles from './styles'

const TemplatePreviewRender = () => {
  const tabIndex = useRecoilValue(selectedTabState)
  const id = useRecoilValue(settingTemplateIdAtom)
  const reset = useResetRecoilState(settingTemplateIdAtom)

  const { data } = useTemplateContent(id)

  useEffect(() => {
    return () => reset()
  }, [])

  const preview: Record<number, React.ReactNode> = {
    0: <PostingTemplatePreview template={data?.template_contents} />,
    1: <MailTemplatePreview template={data?.template_contents} />,
    2: <EvaluationTemplatePreview template={data?.template_contents} />,
    3: <ApplicationTemplatePreview template={data?.template_contents} />,
  }
  if (!data?.template_contents) return null
  return <Styles.Wrapper>{preview[tabIndex]}</Styles.Wrapper>
}

export default TemplatePreviewRender
