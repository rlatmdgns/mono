'use client'

import * as Styles from './styles'

import { Dropdown, IconButton, Member } from '@/shared/ui'

import {
  HandleTemplateCopy,
  HandleTemplateDelete,
  HandleTemplateIdSave,
} from '@/interface/template'
import { settingTemplateIdAtom } from '@/app/[locale]/settings/template/_recoil/atom'

import { useRecoilValue } from 'recoil'
import React from 'react'
import { useTranslations } from 'next-intl'

interface TemplateItemProps {
  id: number
  title: string
  name: string
  image: string
  onDelete: HandleTemplateDelete
  onClick: HandleTemplateIdSave
  onEdit: HandleTemplateIdSave
  onCopy: HandleTemplateCopy
}

const TemplateItem = ({
  id,
  title,
  name,
  image,
  onDelete,
  onClick,
  onEdit,
  onCopy,
}: TemplateItemProps) => {
  const templateId = useRecoilValue(settingTemplateIdAtom)

  const handleEdit = () => onEdit(id)
  const handleDelete = () => onDelete(id, title)
  const handleCopy = () => onCopy(id)

  const handleClick = () => {
    onClick(id)
  }

  const $t = useTranslations()

  return (
    <Styles.Item onClick={handleClick} $isActive={parseInt(templateId) === id}>
      <div>{title}</div>
      <Member name={name} image={image} />
      <Dropdown button={<IconButton size={'md'} icon="icon/more-solid" />}>
        <Dropdown.Item onClick={handleEdit}>
          {$t('setting.template_setting.template_edit')}
        </Dropdown.Item>
        <Dropdown.Item onClick={handleCopy}>
          {$t('setting.template_setting.template_copy')}
        </Dropdown.Item>
        <Dropdown.Item isWarning onClick={handleDelete}>
          {$t('common.delete')}
        </Dropdown.Item>
      </Dropdown>
    </Styles.Item>
  )
}

export default TemplateItem
