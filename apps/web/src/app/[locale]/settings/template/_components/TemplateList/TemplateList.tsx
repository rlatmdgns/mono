'use client'

import TemplateItem from '@/app/[locale]/settings/template/_components/TemplateItem.tsx'
import {
  handleTemplateAdd,
  HandleTemplateCopy,
  HandleTemplateDelete,
  HandleTemplateIdSave,
  Template,
} from '@/interface/template'
import * as Styles from './styles'
import React from 'react'
import { getNodataTemplateInfo } from '@/app/[locale]/settings/template/_components/TemplateList/TemplateList.function'
import { Button } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { useTranslations } from 'next-intl'

interface TemplateListProps {
  iconKey: string
  templates: Template[]
  onClick: HandleTemplateIdSave
  onDelete: HandleTemplateDelete
  onEdit: HandleTemplateIdSave
  onAdd: handleTemplateAdd
  onCopy: HandleTemplateCopy
}

const TemplateList = ({
  iconKey,
  templates,
  onDelete,
  onClick,
  onEdit,
  onAdd,
  onCopy,
}: TemplateListProps) => {
  const noData = getNodataTemplateInfo(iconKey)
  const $t = useTranslations('setting.template_setting')

  if (templates?.length < 1 && noData)
    return (
      <Styles.NoData>
        <Styles.Wrapper>
          <Icon icon={noData.icon} color="neutralGray300" size={40} />
          <Styles.Text>{$t('no_data_template', { title: noData.title })}</Styles.Text>
          <Styles.ButtonWrapper>
            <Button
              text={$t('add_template')}
              style={'mono'}
              iconSource="icon/add-solid"
              onClick={onAdd}
            />
          </Styles.ButtonWrapper>
        </Styles.Wrapper>
      </Styles.NoData>
    )
  return (
    <>
      {templates?.map((template) => {
        return (
          <TemplateItem
            key={template.template_id}
            id={template.template_id}
            title={template.template_title}
            name={template.created_user.user_name}
            image={template.created_user.user_profile}
            onDelete={onDelete}
            onClick={onClick}
            onEdit={onEdit}
            onCopy={onCopy}
          />
        )
      })}
    </>
  )
}

export default TemplateList
