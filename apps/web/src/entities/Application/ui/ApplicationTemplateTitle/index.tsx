import * as Styles from './styles'
import { TextInput } from '@/shared/ui'
import {
  SelectedApplicantBasicItemAtom,
  SelectedApplicantItemAtom,
  SelectedApplicantPersonItemAtom,
} from '@/pageModules/build-application/recoil'
import { useSetRecoilState } from 'recoil'
import { useTranslations } from 'next-intl'
import { useFormContext } from 'react-hook-form'
import { useEffect } from 'react'

interface ApplicationTemplateTitleProps {
  isTemplate?: boolean
  onContentChange: (key: string, value: string) => void
}

export const ApplicationTemplateTitle = ({
  isTemplate,
  onContentChange,
}: ApplicationTemplateTitleProps) => {
  const $t = useTranslations()
  const { watch } = useFormContext()
  const setSelectedBasicItem = useSetRecoilState(SelectedApplicantBasicItemAtom)
  const setSelectedAddItem = useSetRecoilState(SelectedApplicantItemAtom)

  const setSelectedPersonItem = useSetRecoilState(SelectedApplicantPersonItemAtom)

  useEffect(() => {
    if (!isTemplate) return
    setSelectedBasicItem({ key: '', index: 0 })
    setSelectedPersonItem({ key: '', index: 0 })
    setSelectedAddItem({ key: '', index: -1 })
  }, [])

  if (!isTemplate) return null
  return (
    <Styles.Wrapper>
      <Styles.Text>
        {$t('common.template_name')} <Styles.RequiredMark />
      </Styles.Text>
      <TextInput
        defaultValue={watch('template_title')}
        onChange={(event) => onContentChange('template_title', event.target.value)}
        placeholder={$t('validation.template_input_placeholder')}
      />
    </Styles.Wrapper>
  )
}
