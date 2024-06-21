import 'styled-components'
import { css, DefaultTheme as StyledDefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends StyledDefaultTheme {
    colors: {
      [key: string]: string
    }
    fonts: {
      [key: string]: ReturnType<typeof css>
    }
    title: {
      [key: string]: ReturnType<typeof css>
    }
    fontWeights: {
      regular: number
      medium: number
      semiBold: number
      bold: number
    }
    zIndexes: {
      [key: string]: string
    }
    breakpoints: {
      mobile: string
      landscapeMobile: string
      pc: string
    }
  }
}
