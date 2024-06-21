'use client'

import PostingTemplate from '@/app/[locale]/settings/template/_components/Template/PostingTemplate'
import useDeleteTemplate from '@/app/[locale]/settings/template/_hooks/useDeleteTemplate'
import useCopyTemplate from '@/app/[locale]/settings/template/_hooks/useCopyTemplate'
import { settingTemplateIdAtom } from '@/app/[locale]/settings/template/_recoil/atom'
import { useModal } from '@/shared/hooks'
import { Tabs } from '@/shared/ui'
import { MODAL, PAGE } from '@/shared/constants'
import { EvaluationTemplateRequest } from '@/interface/evaluation'
import {
  handleTemplateAdd,
  HandleTemplateDelete,
  HandleTemplateIdSave,
  Template,
} from '@/interface/template'
import React from 'react'
import { useRecoilState } from 'recoil'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import useUpdateTemplate from '@/app/[locale]/settings/template/_hooks/useUpdateTemplate'

interface TemplateContainerProps {
  templates?: Template[]
  tab: string
  handleTemplateAdd: handleTemplateAdd
}

const TemplatePanel = ({ templates, tab, handleTemplateAdd }: TemplateContainerProps) => {
  const router = useRouter()
  const [id, setId] = useRecoilState(settingTemplateIdAtom)

  const { openModal, closeModal } = useModal()
  const { deleteMutate } = useDeleteTemplate()
  const { updateMutate } = useUpdateTemplate(id)
  const { copyTemplateMutate } = useCopyTemplate()
  const $t = useTranslations('setting.template_setting')
  const handleClick: HandleTemplateIdSave = (template_id) => {
    if (id === `${template_id}`) {
      return setId('')
    }
    setId(`${template_id}`)
  }

  const handleDelete: HandleTemplateDelete = (id, title) => {
    openModal(MODAL.CONFIRM, {
      title: <span style={{ wordBreak: 'keep-all' }}>{$t('delete_template', { title })}</span>,
      onClick: () => {
        deleteMutate(id)
        closeModal(MODAL.CONFIRM)
      },
    })
  }

  const handleEdit: HandleTemplateIdSave = (id) => {
    const isPosting = tab === 'posting'
    const isMail = tab === 'mail'
    const isEvaluation = tab === 'evaluation'

    if (isPosting) {
      return openModal(MODAL.UPDATE_POSTING_TEMPLATE, {
        title: $t('modify_posting_template'),
        id,
        onSubmit: (data: any) => {
          updateMutate({ id, data })
        },
      })
    }
    if (isMail) {
      return openModal(MODAL.MAIL_TEMPLATE, {
        title: $t('modify_mail_template'),
        id,
        onSubmit: (data: any) => {
          updateMutate({ id, data })
        },
      })
    }
    if (isEvaluation) {
      return openModal(MODAL.EVALUATION_TEMPLATE, {
        title: $t('modify_evaluation_template'),
        id: `${id}`,
        onSubmit: (data: EvaluationTemplateRequest) =>
          updateMutate({
            id: `${id}`,
            data: data,
          }),
      })
    }
    return router.replace(PAGE.EDIT_APPLICATION_TEMPLATE(id))
  }

  const handleCopy = (id: number) => {
    copyTemplateMutate(id)
  }

  const panels = [
    <PostingTemplate
      key="posting"
      iconKey={'posting'}
      templates={templates}
      onClick={handleClick}
      onDelete={handleDelete}
      onEdit={handleEdit}
      onCopy={handleCopy}
      onAdd={handleTemplateAdd}
    />,
    <PostingTemplate
      key="mail"
      iconKey={'mail'}
      templates={templates}
      onClick={handleClick}
      onDelete={handleDelete}
      onEdit={handleEdit}
      onCopy={handleCopy}
      onAdd={handleTemplateAdd}
    />,
    <PostingTemplate
      key="evaluation"
      iconKey={'evaluation'}
      templates={templates}
      onClick={handleClick}
      onDelete={handleDelete}
      onEdit={handleEdit}
      onCopy={handleCopy}
      onAdd={handleTemplateAdd}
    />,
    <PostingTemplate
      key="application"
      iconKey={'application'}
      templates={templates}
      onClick={handleClick}
      onDelete={handleDelete}
      onEdit={handleEdit}
      onCopy={handleCopy}
      onAdd={handleTemplateAdd}
    />,
  ]

  return <Tabs.PanelList tabContents={panels} />
}

export default TemplatePanel
