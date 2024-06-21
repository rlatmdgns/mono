import styled from 'styled-components'

export const Wrapper = styled.em<{ $style: string }>`
  display: inline-block;
  height: 16px;
  border-radius: 4px;
  padding: 1px 4px;
  ${(props) => props.theme.fonts[10]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-style: normal;

  ${(props) => {
    switch (props.$style) {
      case 'blue':
        return `
          background-color: ${props.theme.colors.blue100};
          color: ${props.theme.colors.blue500};
        `
      case 'green':
        return `
          background-color: ${props.theme.colors.systemGreen100};
          color: ${props.theme.colors.systemGreen500};
        `
      case 'red':
        return `
          background-color: ${props.theme.colors.red100};
          color: ${props.theme.colors.red500};
        `
      default:
        return null
    }
  }}
`
