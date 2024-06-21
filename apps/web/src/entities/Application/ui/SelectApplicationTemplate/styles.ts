import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 600px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  margin-bottom: 24px;
  padding: 24px;
`

export const Text = styled.p`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
  margin-bottom: 4px;
`
