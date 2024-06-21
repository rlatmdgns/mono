import { SelectedApplicantBasicItemAtom } from '@/pageModules/build-application/recoil/atom'
import { LabelInput } from '@/shared/ui'
import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { getGuideText, getState } from './ApplicationBasicItem.functions'
import * as Styles from './styles'
import { getDefaultValuesValid } from '@/features/Application/lib/getDefaultValuesValid'
import { Icon } from '@repo/ui'
import { BasicApplicationItem } from '@/entities/build-application/types/applicationItem'

interface ApplicationBasicItemProps {
  item: BasicApplicationItem
  value?: string
  onChange: (value: string) => void
  isBuild?: boolean
}

interface formValidation {
  [key: string]: boolean
}

export const ApplicationBasicItem = ({
  item,
  value,
  onChange,
  isBuild,
}: ApplicationBasicItemProps) => {
  const currentLocale = useLocale() as 'ko' | 'en'

  const selectedBasicItem = useRecoilValue(SelectedApplicantBasicItemAtom)
  const isSelected = selectedBasicItem.key === item.key

  const [validation, setValidation] = useState<formValidation | undefined>({})
  const [isInputStarted, setIsInputStarted] = useState(false)

  const state =
    validation !== undefined ? getState(isInputStarted, validation[item.key]) : undefined
  const guideText =
    validation !== undefined
      ? getGuideText(isInputStarted, validation[item.key], item.errorMessage || '')
      : undefined
  const isLocked = item.key !== 'name' && isBuild

  const handleValidation = (value: string) => {
    setValidation({ ...validation, [item.key]: getDefaultValuesValid(item.key, value) })
  }

  useEffect(() => {
    if (value === '') {
      setValidation(undefined)
      setIsInputStarted(false)
    }
  }, [value])

  if (!item.isBasic) return null

  return (
    <Styles.Wrapper $isSelected={isSelected}>
      <Styles.Inner>
        <LabelInput
          placeholder={item.placeholder}
          label={item[currentLocale]}
          value={value}
          onChange={(event) => {
            setIsInputStarted(true)
            onChange(event.target.value)
            handleValidation(event.target.value)
          }}
          state={state}
          guideText={guideText}
          maxLength={item.key === 'name' ? 16 : undefined}
          labelTextSize="lg"
          icon={isLocked && <Icon icon="icon/lock-line" color="neutralGray600" />}
          isLabelRequired
        />
      </Styles.Inner>
    </Styles.Wrapper>
  )
}
