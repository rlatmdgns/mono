import { styled } from 'styled-components'

export const Header = styled.header`
  margin-bottom: 10px;
`

export const Title = styled.h3`
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: #374a6a;
`
