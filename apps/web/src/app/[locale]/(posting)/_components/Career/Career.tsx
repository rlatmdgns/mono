import CareerOption from '../CareerOption/CareerOption'
import React from 'react'
import * as Styles from './styles'
import { useFormContext } from 'react-hook-form'
import { TextInput } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const Career = () => {
  const { watch, setValue, register } = useFormContext()
  const $t = useTranslations('create_announcement')

  const handleIrrelevantChange = () => {
    if (!watch('is_irrelevant')) {
      setValue('is_irrelevant', true)
      setValue('is_newcomer', false)
      setValue('is_experienced', false)
      setValue('min_experience_years', undefined)
      setValue('max_experience_years', undefined)
      return
    }
    setValue('is_irrelevant', false)
    setValue('is_experienced', false)
  }
  const handleNewcomerChange = () => {
    if (!watch('is_newcomer')) {
      setValue('is_newcomer', true)
      setValue('is_irrelevant', false)
      return
    }
    setValue('is_newcomer', false)
    setValue('is_irrelevant', false)
  }
  const handleSeniorChange = () => {
    if (!watch('is_experienced')) {
      setValue('is_irrelevant', false)
      setValue('is_experienced', true)
      setValue('min_experience_years', undefined)
      setValue('max_experience_years', undefined)
      return
    }
    setValue('min_experience_years', undefined)
    setValue('max_experience_years', undefined)
    setValue('is_experienced', false)
    setValue('is_irrelevant', false)
  }
  return (
    <Styles.Wrapper>
      <CareerOption
        career={$t('irrelevant')}
        name="is_irrelevant"
        onChange={handleIrrelevantChange}
      />
      <CareerOption career={$t('newcomer')} name="is_newcomer" onChange={handleNewcomerChange} />
      <CareerOption career={$t('career')} name="is_experienced" onChange={handleSeniorChange} />
      <Styles.InputBox>
        <TextInput
          type="number"
          register={register('min_experience_years', {
            valueAsNumber: true,
          })}
          placeholder={$t('career_minimum')}
          width="100%"
          disabled={!watch('is_experienced')}
        />
      </Styles.InputBox>
      ~
      <Styles.InputBox>
        <TextInput
          type="number"
          register={register('max_experience_years', {
            valueAsNumber: true,
          })}
          placeholder={$t('career_maximum')}
          width="100%"
          disabled={!watch('is_experienced')}
        />
      </Styles.InputBox>
    </Styles.Wrapper>
  )
}

export default Career
