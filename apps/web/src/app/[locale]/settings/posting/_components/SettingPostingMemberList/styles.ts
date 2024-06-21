import styled from 'styled-components'

export const ListWrap = styled.div`
  margin: 12px 0;
  overflow-y: auto;
  max-height: calc(100vh - 305px);
  background: ${(props) => props.theme.colors.white};
  border-radius: 8px;
`

export const List = styled.ul``
