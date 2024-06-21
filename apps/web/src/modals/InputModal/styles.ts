import styled from 'styled-components'

export const Wrapper = styled.form`
  width: 400px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 64px;
  padding: 16px;
`

export const HeaderTitle = styled.span`
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Contents = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray200};
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 16px;
  width: 100%;
  height: 72px;
`
