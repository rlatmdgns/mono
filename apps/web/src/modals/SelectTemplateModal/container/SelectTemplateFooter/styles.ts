import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 6px;
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray100};
  padding: 16px;
`
