import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 268px;
  height: calc(100vh - 73px);
  background-color: ${(props) => props.theme.colors.white};
  border-left: 1px solid ${(props) => props.theme.colors.neutralGray200};
`

export const Title = styled.div`
  padding: 18px 12px;
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Options = styled.ul``
