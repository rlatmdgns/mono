import * as Styles from './styles'
import { Select } from '@/shared/ui'
import { Controller } from 'react-hook-form'
import { Template } from '@/interface/template'
import { useTranslations } from 'next-intl'

interface SelectTemplateBodyProps {
  templates: Template[]
}

const SelectTemplateBody = ({ templates }: SelectTemplateBodyProps) => {
  const $t = useTranslations('messages')
  return (
    <Styles.Wrapper>
      <Controller
        name="template_id"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur } }) => (
          <Select
            options={templates}
            onChange={(option) => onChange(option.value)}
            onBlur={onBlur}
            placeholder={$t('select_template_placeholder')}
          />
        )}
      />
    </Styles.Wrapper>
  )
}

export default SelectTemplateBody
