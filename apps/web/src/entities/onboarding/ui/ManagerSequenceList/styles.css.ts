import { theme } from '@/styles/globalTheme.css'
import { globalStyle, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const listWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  padding: `16px 10px 24px 24px`,
  height: `calc(100vh - 156px)`,
  overflowY: 'auto',

  '::-webkit-scrollbar': {
    width: '14px',
  },

  '::-webkit-scrollbar-track': {
    backgroundColor: theme.colors.neutralGray50,
    borderLeft: `1px solid ${theme.colors.neutralGray200}`,
  },

  '::-webkit-scrollbar-thumb': {
    backgroundClip: 'padding-box',
    backgroundColor: theme.colors.neutralGray300,
    borderLeft: '3px solid transparent',
    borderRight: '2px solid transparent',
    borderTop: '2px solid transparent',
    borderBottom: '2px solid transparent',
    borderRadius: '6px',
  },
})

globalStyle(`${listWrapper}::-webkit-scrollbar-thumb:hover`, {
  backgroundClip: 'padding-box',
  backgroundColor: theme.colors.neutralGray300,
  borderLeft: '3px solid transparent',
  borderRight: '2px solid transparent',
  borderTop: '2px solid transparent',
  borderBottom: '2px solid transparent',
  borderRadius: '6px',
})

export const scenesWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '100%',
  maxWidth: '322px',
})

globalStyle(`${scenesWrapper} button`, {
  marginTop: '-4px',
})

export const scenesTitle = style({
  display: 'flex',
  alignItems: 'center',
  padding: '6px 8px',
  ...theme.fonts[14],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray800,
  backgroundColor: theme.colors.elevation100,
  borderTop: `1px solid ${theme.colors.elevation400}`,
  borderBottom: `1px solid ${theme.colors.elevation400}`,
})

export const scenesCount = style({
  marginLeft: '4px',
  padding: '2px 4px',
  width: '20px',
  height: '20px',
  ...theme.fonts[11],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray800,
  backgroundColor: theme.colors.neutralGray200,
  borderRadius: '4px',
  textAlign: 'center',
})

export const scenesList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
})

export const sceneItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '10px',
  padding: '13px 12px',
  width: '100%',
  height: '70px',
  backgroundColor: theme.colors.white,
  border: `1px solid ${theme.colors.neutralGray100}`,
  borderRadius: '6px',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: theme.colors.neutralGray50,
  },

  ':active': {
    backgroundColor: theme.colors.neutralGray100,
  },
})

export const sceneLeft = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  variants: {
    isTodoScene: {
      true: {
        maxWidth: '190px',
        '@media': {
          'only screen and (min-width : 800px)': {
            maxWidth: '210px',
          },
        },
      },
      false: {
        maxWidth: '100%',
      },
    },
  },
})

export const sceneTitle = style({
  ...theme.fonts[14],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray800,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
})

export const sceneBottom = style({
  display: 'flex',
  alignItems: 'center',
})

export const sceneInfo = style({
  ...theme.fonts[12],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray500,
})
