import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.colors.neutralGray100};
  padding: 16px;
  margin-top: 24px;
`

export const Header = styled.div`
  color: ${(props) => props.theme.colors.neutralGray800};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`
