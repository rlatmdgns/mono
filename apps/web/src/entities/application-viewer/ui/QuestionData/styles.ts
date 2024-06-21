import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 24px 16px;
`

export const Text = styled.p`
  color: ${(props) => props.theme.colors.neutralGray500};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  white-space: pre-wrap;
  word-break: break-word;
`
