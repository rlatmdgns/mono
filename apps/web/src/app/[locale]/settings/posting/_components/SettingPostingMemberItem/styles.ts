import styled from 'styled-components'

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;

  & + & {
    border-top: 1px solid ${(props) => props.theme.colors.neutralGray100};
  }
`
