import * as Styles from './styles'
import { CheckBoxIcon, Tooltip } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { useFormContext } from 'react-hook-form'
import React from 'react'
import { useTranslations } from 'next-intl'

const SaveTemplateCheckbox = () => {
  const { watch, setValue } = useFormContext()
  const $t = useTranslations('evaluation')
  const handleTemplateSave = (value: boolean) => setValue('is_save_template', value)

  return (
    <Styles.Wrapper>
      <Styles.Checkbox onClick={() => handleTemplateSave(!watch('is_save_template'))}>
        <CheckBoxIcon checked={!!watch('is_save_template')} />
        <Styles.Text>{$t('save_template')}</Styles.Text>
        <Tooltip text={$t('save_template_check_tooltip')} direction="right">
          <Icon icon="icon/info-solid" color="neutralGray300" />
        </Tooltip>
      </Styles.Checkbox>
    </Styles.Wrapper>
  )
}

export default SaveTemplateCheckbox
