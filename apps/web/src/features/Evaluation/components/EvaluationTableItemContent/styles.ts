import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`

export const MethodList = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.neutralGray200};
  border-radius: 6px;
`

export const MethodItem = styled.div`
  flex: auto;
  ${(props) => props.theme.fonts[14]};
  color: ${(props) => props.theme.colors.neutralGray500};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  text-align: center;
`

export const InputBox = styled.div`
  height: 64px;
  background-color: ${(props) => props.theme.colors.neutralGray50};
  border: 1px solid ${(props) => props.theme.colors.neutralGray200};
  border-radius: 6px;
  ${(props) => props.theme.fonts[14]};
  color: ${(props) => props.theme.colors.neutralGray400};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  padding: 12px;
`
