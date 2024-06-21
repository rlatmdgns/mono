import styled from 'styled-components'

export const Title = styled.h3`
  display: flex;
  align-items: center;
  margin: 32px 0 24px;
  height: 40px;
  ${(props) => props.theme.fonts[20]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
`
