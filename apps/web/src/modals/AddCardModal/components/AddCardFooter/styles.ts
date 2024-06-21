import styled from 'styled-components'

export const AddCardFooter = styled.div`
  display: flex;
  padding: 16px;
  justify-content: end;
  gap: 6px;
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray200};
  button {
    width: 96px;
  }
`
