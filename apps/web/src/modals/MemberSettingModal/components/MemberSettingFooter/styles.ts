import styled from 'styled-components'

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 72px;
  padding: 16px;
  gap: 6px;
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray200};
`
