import TemplateContainer from '@/app/[locale]/settings/template/_container/TemplateContainer'
import getServerMailTemplates from '@/services/template/getMailTemplates/getServerMailTemplates'
import getServerEvaluationTemplates from '@/services/template/getServerEvaluationTemplates'
import getServerPostingTemplates from '@/services/template/getServerPostingTemplates'
import React from 'react'
import getServerApplicationTemplates from '@/services/template/getServerApplicationTemplates'

const TemplatePage = async () => {
  const result = await Promise.all([
    getServerPostingTemplates(),
    getServerMailTemplates(),
    getServerEvaluationTemplates(),
    getServerApplicationTemplates(),
  ])

  const postingTemplates = result[0]
  const mailTemplates = result[1]
  const evaluationTemplates = result[2]
  const applicationTemplates = result[3]

  return (
    <TemplateContainer
      postingTemplates={postingTemplates}
      mailTemplates={mailTemplates}
      evaluationTemplates={evaluationTemplates}
      applicationTemplates={applicationTemplates}
    />
  )
}

export default TemplatePage
