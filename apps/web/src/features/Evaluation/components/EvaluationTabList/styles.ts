import styled from 'styled-components'

export const TabList = styled.ul`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.neutralGray200};
  border-radius: 6px;
`
