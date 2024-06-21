'use client'

import TemplateContent from '@/app/[locale]/settings/template/_components/TemplateContent'
import TemplatePreviewRender from '@/app/[locale]/settings/template/_components/TemplatePreviewRender'
import { selectedTabState } from '@/shared/ui/Tabs/atom'
import { Template } from '@/interface/template'
import React from 'react'
import { useRecoilValue } from 'recoil'
import * as Styles from './styles'

interface TemplateContainerProps {
  postingTemplates: Template[]
  mailTemplates: Template[]
  evaluationTemplates: Template[]
  applicationTemplates: Template[]
}

const TemplateContainer = ({
  postingTemplates,
  mailTemplates,
  evaluationTemplates,
  applicationTemplates,
}: TemplateContainerProps) => {
  const tabIndex = useRecoilValue(selectedTabState)
  const initialData: Record<number, Template[]> = {
    0: postingTemplates,
    1: mailTemplates,
    2: evaluationTemplates,
    3: applicationTemplates,
  }

  return (
    <Styles.Wrapper>
      <Styles.Content>
        <TemplateContent initialData={initialData[tabIndex]} />
      </Styles.Content>
      <TemplatePreviewRender />
    </Styles.Wrapper>
  )
}

export default TemplateContainer
