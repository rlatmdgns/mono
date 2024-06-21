import styled from 'styled-components'

export const List = styled.ul`
  overflow: auto;
  margin-top: 12px;
  flex: 1;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.white};
`
