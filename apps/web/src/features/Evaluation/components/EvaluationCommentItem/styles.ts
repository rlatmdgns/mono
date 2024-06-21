import styled from 'styled-components'

export const Item = styled.li`
  padding: 12px;
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray500};
  background-color: ${(props) => props.theme.colors.neutralGray50};
  border-radius: 6px;
  word-break: break-word;
`
