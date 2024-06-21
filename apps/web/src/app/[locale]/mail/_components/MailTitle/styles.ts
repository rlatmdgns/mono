import styled from 'styled-components'

export const Title = styled.h3`
  padding: 32px 0 46px 0;
  ${(props) => props.theme.title[18]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
`
