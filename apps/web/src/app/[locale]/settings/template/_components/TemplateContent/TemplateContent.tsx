'use client'

import SettingTitle from '@/app/[locale]/settings/_components/SettingTitle'
import TemplatePanel from '@/app/[locale]/settings/template/_components/TemplatePanel'
import useTemplates from '@/app/[locale]/settings/template/_hooks/useTemplates'
import { settingTemplateIdAtom } from '@/app/[locale]/settings/template/_recoil/atom'
import { useModal } from '@/shared/hooks'
import { Button, SearchInput, Tabs } from '@/shared/ui'
import { selectedTabState } from '@/shared/ui/Tabs/atom'
import { MODAL, PAGE } from '@/shared/constants'
import { Template } from '@/interface/template'
import React, { useDeferredValue, useEffect, useState } from 'react'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import * as Styles from './styles'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import useCreateTemplate from '@/app/[locale]/settings/template/_hooks/useCreateTemplate'

interface TemplateContainerProps {
  initialData: Template[]
}

const TemplateContent = ({ initialData }: TemplateContainerProps) => {
  const $t = useTranslations('setting.template_setting')
  const TABS = [
    { title: $t('posting_template'), value: 'posting' },
    { title: $t('mail_template'), value: 'mail' },
    { title: $t('evaluation_template'), value: 'evaluation' },
    { title: $t('application_template'), value: 'applicant_form' },
  ]

  const router = useRouter()
  const currentLocale = useLocale()
  const { openModal } = useModal()
  const tabIndex = useRecoilValue(selectedTabState)
  const reset = useResetRecoilState(settingTemplateIdAtom)

  const { creatTemplateMutate } = useCreateTemplate()

  const [search, setSearch] = useState('')
  const deferredQuery = useDeferredValue(search ? `?search=${search}` : ``)

  const { data, refetch } = useTemplates(
    {
      template_type: TABS[tabIndex].value,
      search: deferredQuery,
    },
    initialData,
  )

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formElements = event.currentTarget.elements[0] as HTMLInputElement
    setSearch(formElements.value)
  }

  const handleTemplateAdd = () => {
    const isPosting = TABS[tabIndex].value === 'posting'
    const isMail = TABS[tabIndex].value === 'mail'
    const isEvaluation = TABS[tabIndex].value === 'evaluation'

    if (isPosting) {
      return openModal(MODAL.UPDATE_POSTING_TEMPLATE, {
        title: $t('add_posting_template'),
        onSubmit: (data: any) =>
          creatTemplateMutate({
            ...data,
            template_type: 'posting',
          }),
      })
    }
    if (isMail) {
      return openModal(MODAL.MAIL_TEMPLATE, {
        title: $t('add_mail_template'),
        onSubmit: (data: any) =>
          creatTemplateMutate({
            ...data,
            template_type: 'mail',
          }),
      })
    }
    if (isEvaluation) {
      return openModal(MODAL.EVALUATION_TEMPLATE, {
        title: $t('add_evaluation_template'),
        onSubmit: (data: any) =>
          creatTemplateMutate({
            ...data,
            template_type: 'evaluation',
          }),
      })
    }
    return router.replace(PAGE.CREATE_APPLICATION_TEMPLATE)
  }

  useEffect(() => {
    refetch()
    reset()
  }, [deferredQuery, tabIndex])

  return (
    <Styles.Wrapper>
      <Styles.Top>
        <SettingTitle title={$t('title')} />
        <Button
          width={currentLocale === 'ko' ? '122px' : '140px'}
          text={$t('add_template')}
          style="fill-weak"
          iconSource="icon/add-solid"
          onClick={handleTemplateAdd}
        />
      </Styles.Top>
      <Tabs state="border">
        <Styles.TabArea>
          <Styles.Tab>
            <Tabs.TriggerList height={52} state="border" tabContents={TABS} />
          </Styles.Tab>
          <form onSubmit={handleSubmit}>
            <SearchInput width="288px" size="sm" placeholder={$t('template_name')} />
          </form>
        </Styles.TabArea>
        <TemplatePanel
          templates={data}
          tab={TABS[tabIndex].value}
          handleTemplateAdd={handleTemplateAdd}
        />
      </Tabs>
    </Styles.Wrapper>
  )
}

export default TemplateContent
