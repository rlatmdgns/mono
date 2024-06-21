import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 760px;
  min-width: 396px;
  width: calc(100vw - 104px);
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 8px;
`

export const Header = styled.div`
  padding: 24px 20px;
  ${(props) => props.theme.fonts[16]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: calc(100vh - 104px);
  min-height: 360px;
`

export const Body = styled.div`
  max-height: 692px;
  min-height: 224px;
  padding: 36px 80px;
  background-color: ${(props) => props.theme.colors.neutralGray100};
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray200};
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray200};
  overflow-y: auto;
`

export const List = styled.ul`
  padding: 24px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 6px;
  padding: 16px 20px;
`
