import { css, DefaultTheme } from 'styled-components'

const monotone = {
  white: '#FFFFFF',
  black: '#000000',
  background: '#F8F8F8',
  background200: '#F5F5F5',
}

const neutralGray = {
  neutralGray50: '#F9FAFB',
  neutralGray100: '#F2F4F6',
  neutralGray200: '#E5E8EB',
  neutralGray300: '#D1D6DB',
  neutralGray400: '#B0B8C1',
  neutralGray500: '#8B95A1',
  neutralGray600: '#6B7684',
  neutralGray700: '#4E5968',
  neutralGray800: '#333D4B',
  neutralGray900: '#191F28',
}

const red = {
  red50: '#FFFBFA',
  red100: '#FFF3F2',
  red200: '#FEDBD6',
  red300: '#FFB5AC',
  red400: '#FC8374',
  red500: '#FF5B46',
  red600: '#FC3925',
  red700: '#E02616',
  red800: '#B81E10',
  red900: '#781307',
}

const blue = {
  blue50: '#FAFCFF',
  blue100: '#EDF4FE',
  blue200: '#CDE0FD',
  blue300: '#A4C7FC',
  blue400: '#69A2FA',
  blue500: '#468EFF',
  blue600: '#2275F8',
  blue700: '#0655D5',
  blue800: '#0442A6',
  blue900: '#022C6F',
}

const system = {
  systemRed100: '#FFF1F0',
  systemRed500: '#FF7067',
  systemOrange100: '#FFF6EF',
  systemOrange500: '#FCA95D',
  systemYellow100: '#FFF8E7',
  systemYellow500: '#FFD362',
  systemGreen100: '#EDFAF3',
  systemGreen500: '#50CD89',
  systemTurquoise100: '#EBFAF7',
  systemTurquoise500: '#72DBC8',
  badgeGreen: '#45B678',
  badgeGreenBackground: '#DEF6EA',
  systemBlue100: '#EFF5FF',
  systemBlue500: '#629FFF',
  systemNavy100: '#EFF1FF',
  systemNavy500: '#6272FF',
  systemPurple100: '#F2F1FD',
  systemPurple500: '#7977E7',
  systemPink100: '#FFF1FB',
  systemPink500: '#FF8DDF',
}

export const colors = {
  ...monotone,
  ...neutralGray,
  ...red,
  ...blue,
  ...system,
}

const title = {
  11: css`
    font-size: 11px;
    line-height: 16px;
    letter-spacing: -0.11px;
  `,
  12: css`
    font-size: 12px;
    line-height: 1.3;
    letter-spacing: -0.01em;
  `,
  14: css`
    font-size: 14px;
    line-height: 1.15;
    letter-spacing: -0.01em;
  `,
  18: css`
    font-size: 18px;
    line-height: 1.15;
    letter-spacing: -0.01em;
  `,
}

const fonts = {
  10: css`
    font-size: 10px;
    line-height: 14px;
    letter-spacing: -0.01em;
  `,
  11: css`
    font-size: 11px;
    line-height: 16px;
    letter-spacing: -0.01em;
  `,
  12: css`
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.01em;
  `,
  14: css`
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.01em;
  `,
  15: css`
    font-size: 15px;
    line-height: 24px;
    letter-spacing: -0.01em;
  `,
  16: css`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.01em;
  `,
  18: css`
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.01em;
  `,
  20: css`
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.01em;
  `,
  22: css`
    font-size: 22px;
    line-height: 32px;
    letter-spacing: -0.01em;
  `,
  24: css`
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.01em;
  `,
  28: css`
    font-size: 28px;
    line-height: 42px;
    letter-spacing: -0.01em;
  `,
  32: css`
    font-size: 32px;
    line-height: 48px;
    letter-spacing: -0.01em;
  `,
  48: css`
    font-size: 48px;
    line-height: 64px;
    letter-spacing: -0.01em;
  `,
}

const fontWeights = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
}

const zIndexes = {
  background: '0',
  base: '1',
  overlay: '10',
  dropdown: '20',
  modal: '30',
  modalDropdown: '40',
  header: '50',
  content: '60',
  card: '80',
  floatingButton: '90',
  tooltip: '100',
  highest: '110',
}

const breakpoints = {
  mobile: `@media only screen and (min-width: 370px)`,
  landscapeMobile: `@media only screen and (min-width: 670px)`,
  pc: `@media only screen and (min-width: 1200px)`,
}

const Themes: DefaultTheme = {
  colors,
  fonts,
  title,
  fontWeights,
  zIndexes,
  breakpoints,
}

export default Themes
