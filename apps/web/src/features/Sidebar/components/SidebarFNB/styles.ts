import styled from 'styled-components'

export const List = styled.ul`
  width: 100%;
  margin: auto auto 0;
  padding: 10px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray200};
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray200};
  color: ${(props) => props.theme.colors.neutralGray500};
`
