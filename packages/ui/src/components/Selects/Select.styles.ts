import { CSSObjectWithLabel, GroupBase, StylesConfig } from 'react-select'
import { OptionStyleProps, StylesProps } from './Select.interface'

export function selectStyles<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
    controlMinWidth,
    controlHeight,
    controlMinHeight,
    controlBackgroundColor,
    controlBorder,
    controlBorderRadius,
    controlBoxShadow,
    valueContainerPaddingLeft,
    inputHeight,
    inputMargin,
    inputPadding,
    singleValueFontWeight,
    indicatorsContainerPaddingRight,
    menuWidth,
    menuPortalZIndex,
    menuListPadding,
    optionHeight,
    optionBorderRadius,
    optionColor,
    optionFontSize,
    optionLineHeight,
    optionPadding,
    optionMinWidth,
    menuPosition = 'left',
    isHovered = true,
    isSearchable = false,
    isNoDropdownIndicator = false,
  }: StylesProps): StylesConfig<Option, IsMulti, Group> {
  return {
    control: (base: CSSObjectWithLabel, { isFocused, isDisabled }) => ({
      ...base,
      minWidth: controlMinWidth ? controlMinWidth : '82px',
      height: controlHeight ? controlHeight : 'auto',
      minHeight: controlMinHeight ? controlMinHeight : '40px',
      backgroundColor: isDisabled
        ? '#F2F4F6'
        : controlBackgroundColor
          ? controlBackgroundColor
          : '#fff',
      border: controlBorder,
      borderWidth: '1px',
      borderColor: isFocused ? '#468EFF' : '#E5E8EB',
      borderRadius: controlBorderRadius ? controlBorderRadius : '6px',
      boxShadow: controlBoxShadow ? controlBoxShadow : isFocused ? '0 0 0 0.5px #468EFF' : 'none',
      paddingLeft: '0',
      fontSize: '14px',
      '&:hover': isHovered &&
        !isFocused && {
          borderColor: '#6B7684',
        },
    }),
    valueContainer: (provided: CSSObjectWithLabel) => ({
      ...provided,
      width: '100%',
      padding: `0 8px 0 ${valueContainerPaddingLeft || '12px'}`,
    }),
    singleValue: (provided: CSSObjectWithLabel) => ({
      ...provided,
      color: '#333D4B',
      fontSize: '14px',
      fontWeight: singleValueFontWeight ? singleValueFontWeight : '500',
      lineHeight: '16px',
      padding: '0',
    }),
    group: (styles: CSSObjectWithLabel) => ({
      ...styles,
      padding: '4px 0',
      '&:not(:first-of-type)': {
        borderTop: '1px solid #F2F4F6',
      },
    }),
    groupHeading: (styles: CSSObjectWithLabel) => ({
      ...styles,
      marginBottom: '0',
    }),
    input: (styles: CSSObjectWithLabel) => ({
      ...styles,
      height: inputHeight && inputHeight,
      display: isSearchable ? 'flex' : 'grid',
      margin: inputMargin ? inputMargin : '2px',
      padding: inputPadding ? inputPadding : '2px 0',

      '&::after': {
        display: isSearchable ? 'none' : 'block',
      },
    }),
    placeholder: (styles: CSSObjectWithLabel) => ({
      ...styles,
      color: '#B0B8C1',
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '16px',
      margin: '0',
    }),
    indicatorsContainer: () => ({
      padding: !isNoDropdownIndicator ? `0 ${indicatorsContainerPaddingRight || '12px'} 0 0` : 0,
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      width: '16px',
      height: '16px',
      padding: '0',
    }),
    menu: (base: CSSObjectWithLabel) => ({
      ...base,
      width: menuWidth ? menuWidth : '100%',
      right: menuPosition === 'right' ? '0' : '',
      background: '#fff',
      border: '0',
      borderRadius: '4px',
      boxShadow: '0px 12px 40px 0px rgba(161, 176, 203, 0.30)',
      marginTop: '8px',
      zIndex: 10,
      overflow: 'auto',
    }),
    menuList: (styles: CSSObjectWithLabel) => ({
      ...styles,
      padding: menuListPadding ? menuListPadding : '8px',
      overflow: 'inherit',
    }),
    option: (styles: CSSObjectWithLabel, { isFocused, isSelected, data }: OptionStyleProps) => {
      const optionData = data as { __isNew__: boolean }
      const isNew = optionData.__isNew__

      return {
        ...styles,
        minWidth: optionMinWidth,
        height: !isNew && (optionHeight ? optionHeight : '44px'),
        display: 'flex',
        alignItems: 'center',
        background: isFocused && !isSelected ? '#F9FAFB' : '#fff',
        boxShadow: '',
        borderRadius: optionBorderRadius ? optionBorderRadius : '6px',
        color: isSelected ? '#468EFF' : optionColor ? optionColor : '#333D4B',
        fontSize: optionFontSize ? optionFontSize : '14px',
        fontWeight: '500',
        lineHeight: optionLineHeight ? optionLineHeight : '16px',
        letterSpacing: '-0.01em',
        padding: optionPadding ? optionPadding : '8px 14px',
        cursor: isFocused ? 'pointer' : 'default',
        zIndex: 1,
        ':active': {
          backgroundColor: '#F9FAFB',
        },
        div: {
          width: isNew && '100%',
          maxWidth: '100%',
        },
        span: {
          display: isNew && 'flex',
          width: isNew && '100%',
        },
      } as CSSObjectWithLabel
    },
    multiValue: (styles) => {
      return {
        ...styles,
        alignItems: 'center',
        backgroundColor: '#F2F4F6',
        borderRadius: '6px',
        padding: '6px',
      }
    },
    multiValueLabel: (styles) => ({
      ...styles,
    }),
    multiValueRemove: () => ({
      width: '16px',
      height: '16px',
    }),
    menuPortal: (styles: CSSObjectWithLabel) => ({
      ...styles,
      zIndex: menuPortalZIndex ? menuPortalZIndex : 50,
    }),
    noOptionsMessage: (styles: CSSObjectWithLabel) => ({
      ...styles,
      minWidth: '160px',
      color: '#B0B8C1',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '500',
    }),
  }
}
