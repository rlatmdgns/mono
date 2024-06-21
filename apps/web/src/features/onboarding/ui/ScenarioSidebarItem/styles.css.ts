import { globalStyle, style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const listWrapper = style({})

export const freshmanWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px',
  cursor: 'pointer',
})

globalStyle(`${freshmanWrapper} > button`, {
  height: '22px',
  padding: '5px',
})

globalStyle(`${freshmanWrapper} > button:first-of-type`, {
  flex: 1,
  justifyContent: 'start',
})

globalStyle(`${freshmanWrapper} > button:not(:disabled):hover`, {
  background: 'none',
})

globalStyle(`${freshmanWrapper} > button > svg`, {
  flex: '0 0 16px',
})

globalStyle(`${freshmanWrapper} > button > span`, {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

export const scenarioItemWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '4px',
  ':hover': {
    background: theme.colors.blue100,
  },
})

globalStyle(`${scenarioItemWrapper} > button`, {
  justifyContent: 'start',
  color: theme.colors.neutralGray500,
})

globalStyle(`${scenarioItemWrapper} > button:not(:disabled):hover`, {
  background: 'none',
})

globalStyle(`${scenarioItemWrapper} > button span`, {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

export const scenariosLengthStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '14px',
  height: '14px',
  padding: '2px',
  borderRadius: '3px',
  verticalAlign: 'middle',
  ...theme.fonts[10],
  color: theme.colors.neutralGray600,
  background: theme.colors.neutralGray200,
})

export const buttonWrapper = style({
  width: '100%',
})

globalStyle(`${buttonWrapper} > button`, {
  minWidth: '100%',
  justifyContent: 'start',
})

export const addScenarioButtonWrapper = style({
  padding: '6px',
})

globalStyle(`${addScenarioButtonWrapper} > button`, {
  minWidth: '100%',
  color: theme.colors.neutralGray500,
})
