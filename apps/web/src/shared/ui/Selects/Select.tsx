'use client'

import { default as ReactSelect } from 'react-select'
import Creatable from 'react-select/creatable'

import { selectStyles } from './Select.styles'
import { SelectProps } from './Select.interface'

import { DropdownIndicator } from './DropdownIndicator'
import { CustomOptionLabel } from './CustomOptionLabel'
import { FormatGroupLabel } from './FormatGroupLabel'
import { SelectMultiValueRemoveButton } from './SelectMultiValueRemoveButton'
import { SelectDefaultOption } from './SelectDefaultOption'
import { SelectDefaultMultiValueLabel } from './SelectDefaultMultiValueLabel'
import { useTranslations } from 'next-intl'
import { FormCreateLabel } from '@/shared/ui/Selects/FormatCreateLabel'

export const Select = ({
  defaultValue,
  value,
  onChange,
  onBlur,
  options,
  placeholder = 'select',
  Option,
  styles,
  inputValue,
  isNoDropdownIndicator,
  disabled = false,
  isSearchable = false,
  onInputChange,
  isMulti = false,
  isClearable = false,
  MultiValueLabel,
  noOptionsMessage,
  closeMenuOnSelect = true,
  isMenuPortalOff = false,
  closeMenuOnScroll = false,
  isCreatable = false,
}: SelectProps) => {
  const components = {
    DropdownIndicator: !isNoDropdownIndicator ? DropdownIndicator : null,
    IndicatorSeparator: () => null,
    Option: Option ? Option : SelectDefaultOption,
    MultiValueRemove: SelectMultiValueRemoveButton,
    MultiValueLabel: MultiValueLabel ? MultiValueLabel : SelectDefaultMultiValueLabel,
  }
  const $t = useTranslations('common')

  const createOption = (label: string) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ''),
  })

  const handleCreate = (inputValue: string) => {
    if (!onChange) return
    onChange(createOption(inputValue), 'create-option')
  }

  const renderFormatCreateLabel = (searchValue: string) => {
    return <FormCreateLabel searchValue={searchValue} onCreate={handleCreate} />
  }

  const selectProperties = {
    closeMenuOnSelect,
    instanceId: 'select',
    defaultValue,
    value,
    onChange,
    isDisabled: disabled,
    options,
    inputValue,
    styles: selectStyles({
      ...({ ...styles, isSearchable, isNoDropdownIndicator } || {}),
    }),
    placeholder,
    isSearchable,
    formatOptionLabel: CustomOptionLabel,
    components,
    formatGroupLabel: FormatGroupLabel,
    menuPlacement: 'auto' as 'auto',
    menuPortalTarget: !isMenuPortalOff && typeof window !== 'undefined' ? document.body : null,
    menuShouldScrollIntoView: false,
    onBlur,
    onInputChange,
    isMulti,
    isClearable,
    noOptionsMessage: () => noOptionsMessage || $t('no_search_results'),
    closeMenuOnScroll: (event: any) => {
      const isReactSelect = event.target?.id.includes('react-select')
      return !isReactSelect && closeMenuOnScroll
    },
  }

  if (isCreatable) {
    return (
      <Creatable
        {...selectProperties}
        formatCreateLabel={renderFormatCreateLabel}
        onCreateOption={handleCreate}
      />
    )
  }
  return <ReactSelect {...selectProperties} />
}
