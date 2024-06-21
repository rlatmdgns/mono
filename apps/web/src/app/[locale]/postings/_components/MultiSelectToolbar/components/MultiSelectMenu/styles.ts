import styled from 'styled-components'

export const MultiSelectMenu = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 36px;
  height: 24px;
`

export const Item = styled.li`
  button > span {
    color: ${(props) => props.theme.colors.neutralGray700};
  }

  &:nth-of-type(3) > button > span {
    color: ${(props) => props.theme.colors.blue500};
  }

  &:last-of-type > button > span {
    color: ${(props) => props.theme.colors.red500};
  }
`
