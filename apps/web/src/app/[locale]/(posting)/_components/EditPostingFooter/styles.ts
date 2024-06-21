import styled from 'styled-components'

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px;
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray200};
  height: 72px;
`
