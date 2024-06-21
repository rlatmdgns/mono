import styled from 'styled-components'

export const Form = styled.form`
  overflow: hidden;
  width: 1120px;

  background: ${(props) => props.theme.colors.white};

  border-radius: 10px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 16px;
  ${(props) => props.theme.fonts[16]}
  font-weight: ${(props) => props.theme.fontWeights.bold};
`
export const Inner = styled.div`
  display: flex;
  padding: 16px 0 0 0;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  padding: 16px;
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray200};
`
