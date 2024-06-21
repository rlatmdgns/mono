import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 16px;
`
export const Title = styled.h3`
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: #374a6a;
`
