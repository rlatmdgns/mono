'use client'

import RowTitle from '@/app/[locale]/settings/template/_components/RowTitle'
import TemplateList from '@/app/[locale]/settings/template/_components/TemplateList'
import {
  handleTemplateAdd,
  HandleTemplateCopy,
  HandleTemplateDelete,
  HandleTemplateIdSave,
} from '@/interface/template'
import React from 'react'
import * as Styles from './styles'

interface PostingTemplateProps {
  iconKey: string
  templates: any
  onDelete: HandleTemplateDelete
  onClick: HandleTemplateIdSave
  onEdit: HandleTemplateIdSave
  onCopy: HandleTemplateCopy
  onAdd: handleTemplateAdd
}

const PostingTemplate = ({
  iconKey,
  templates,
  onClick,
  onDelete,
  onEdit,
  onAdd,
  onCopy,
}: PostingTemplateProps) => {
  return (
    <Styles.Template>
      <RowTitle />
      <TemplateList
        iconKey={iconKey}
        templates={templates}
        onClick={onClick}
        onDelete={onDelete}
        onEdit={onEdit}
        onAdd={onAdd}
        onCopy={onCopy}
      />
    </Styles.Template>
  )
}

export default PostingTemplate
