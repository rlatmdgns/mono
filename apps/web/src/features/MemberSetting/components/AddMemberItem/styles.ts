import styled from 'styled-components'

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 8px;
  gap: 8px;

  & + & {
    border-top: 1px solid ${(props) => props.theme.colors.neutralGray100};
  }
`
