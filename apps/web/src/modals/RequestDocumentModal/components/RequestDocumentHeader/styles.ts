import styled from 'styled-components'

export const Header = styled.div`
  padding: 24px 16px;
  ${(props) => props.theme.title[16]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`
