import * as Styles from './styles'
import { Select } from '@/shared/ui'
import { useFormContext } from 'react-hook-form'
import { Template } from '@/interface/template'
import { useEffect, useState } from 'react'
import { useTemplateContent } from '@/shared/hooks'
import { useSearchParams } from 'next/navigation'

interface TemplateProps {
  label: string
  value: string | number
}

interface SelectApplicationTemplateProps {
  isTemplate?: boolean
  templates?: Template[]
}

export const SelectApplicationTemplate = ({
  isTemplate,
  templates,
}: SelectApplicationTemplateProps) => {
  const searchParams = useSearchParams()
  const isEdit = searchParams.get('edit')

  const { reset, setValue, getValues } = useFormContext()
  const [templateId, setTemplateId] = useState<string>('')

  const { data: template } = useTemplateContent(templateId)

  const templatesData =
    (templates &&
      templates?.map((template: Template): TemplateProps => {
        return {
          label: template.template_title,
          value: template.template_id,
        }
      })) ||
    []

  const initTemplate = () => {
    if (!templateId || !template) {
      return reset()
    }
    const form = template?.template_contents?.posting_applicant_form
      ? template?.template_contents?.posting_applicant_form
      : template?.template_contents
    const applicantList = form.filter(
      (applicant: any) => applicant.key !== 'enterprise_required_personal_terms',
    )
    const terms = form.find(
      (applicant: any) => applicant.key === 'enterprise_required_personal_terms',
    )
    setValue('applicant_list', applicantList)
    setValue('terms', {
      ...getValues('terms'),
      is_required: terms?.is_required,
      description: terms?.description,
    })
  }
  const handleChange = (value: string) => setTemplateId(value)

  useEffect(() => {
    initTemplate()
  }, [template])

  if (isTemplate) return null

  if (isEdit) return null

  return (
    <Styles.Wrapper>
      <Styles.Text>템플릿</Styles.Text>
      <Select
        options={[{ value: null, label: '선택하지 않음' }, ...templatesData]}
        placeholder="템플릿을 선택해주세요."
        onChange={(option) => handleChange(option.value || '')}
      />
    </Styles.Wrapper>
  )
}
