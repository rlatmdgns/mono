import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 16px;
  width: 100%;
  height: 73px;
  background-color: ${(props) => props.theme.colors.white};
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray200};
`

export const EnterpriseName = styled.span`
  margin: 10px 0;
  ${(props) => props.theme.fonts[18]};
  line-height: 20px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
`
