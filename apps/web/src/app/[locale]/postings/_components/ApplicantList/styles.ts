import styled from 'styled-components'

export const List = styled.ul`
  overflow: auto;
  max-height: calc(100vh - 212px);
  margin-top: 4px;
  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray900};
`
