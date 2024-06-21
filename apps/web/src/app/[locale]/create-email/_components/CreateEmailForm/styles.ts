import styled from 'styled-components'

export const Form = styled.form``

export const Error = styled.p`
  margin: 10px 0 16px 0;
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.red500};
`
