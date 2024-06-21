import styled from 'styled-components'

export const Back = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const Text = styled.span`
  ${(props) => props.theme.fonts[18]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
`
