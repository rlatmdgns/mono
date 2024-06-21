import styled from 'styled-components'

export const Dummy = styled.div`
  width: 136px;
`

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

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`
