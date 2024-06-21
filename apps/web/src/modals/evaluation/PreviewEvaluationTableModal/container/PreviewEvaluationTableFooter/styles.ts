import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray200};
  padding: 0 16px;
`
