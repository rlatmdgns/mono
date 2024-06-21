import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'
import { recipe } from '@vanilla-extract/recipes'

export const sequenceDummy = style({
  display: 'inline-flex',
  width: '239px',
})

export const sequenceWrapper = style({
  position: 'relative',
})

export const sequenceStyle = recipe({
  base: {
    display: 'inline-flex',
    width: '239px',
    padding: '12px',
    position: 'relative',
    zIndex: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '8px',
    borderRadius: '8px',
    background: theme.colors.white,
    boxShadow: '0px 20px 40px 0px rgba(161, 176, 203, 0.10)',
  },
  variants: {
    type: {
      manager: {
        selectors: {
          '&:after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            right: '239px',
            width: '76px',
            height: '1px',
            borderTop: `1px dashed ${theme.colors.neutralGray400}`,
            zIndex: 1,
          },
        },
      },
      freshman: {
        selectors: {
          '&:before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '239px',
            width: '76px',
            height: '1px',
            borderTop: `1px dashed ${theme.colors.neutralGray400}`,
            zIndex: 1,
          },
        },
      },
    },
  },
})

export const sequenceHeader = style({
  display: 'flex',
  width: '100%',
  marginBottom: '8px',
  justifyContent: 'space-between',
})

export const sequenceTitle = style({
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray800,
  ...theme.fonts[14],
})

export const sequenceCharge = style({
  color: theme.colors.neutralGray400,
  fontWeight: theme.fontWeights.medium,
  ...theme.fonts[11],
})

export const tasks = style({
  width: '100%',
})

export const wrapper = style({
  display: 'flex',
  padding: '10px 8px',
  gap: '8px',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: `1px solid ${theme.colors.elevation300}`,
  borderRadius: '4px',
  background: theme.colors.elevation200,
  selectors: {
    ['&:nth-child(n+2)']: {
      marginTop: '9px',
    },
  },
})

export const titleStyle = style({
  display: 'flex',
  flex: '0 0 119px',
  gap: '4px',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray800,
  ...theme.fonts[14],
})

export const scenesWrapper = style({
  display: 'inline-flex',
  width: '256px',
  padding: '8px',
  position: 'absolute',
  top: '50%',
  left: '230px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',
  border: `1px solid ${theme.colors.elevation200}`,
  background: theme.colors.white,
  borderRadius: '4px',
  zIndex: 50,
})

export const scenes = style({
  width: '100%',
})

export const addSceneWrapper = style({
  display: 'flex',
  width: '100%',
  gap: '8px',
  padding: '8px',
  alignItems: 'center',
  selectors: {
    '&:hover': {
      background: theme.colors.neutralGray50,
    },
  },
})

export const iconWrapper = style({
  width: '36px',
  height: '36px',
  padding: '10px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '4px',
  background: theme.colors.neutralGray100,
})

export const information = style({
  textAlign: 'left',
})

export const addSceneTitleStyle = style({
  ...theme.fonts[12],
  color: theme.colors.neutralGray800,
})

export const descriptionStyle = style({
  ...theme.fonts[12],
  color: theme.colors.neutralGray400,
})

export const addSceneHeaderWrapper = style({
  width: '100%',
  padding: '0 8px',
})

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const headerTitle = style({
  color: theme.colors.neutralGray500,
  ...theme.fonts[10],
})
