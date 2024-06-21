import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 4px;
  background-color: ${(props) => props.theme.colors.neutralGray100};
  border-radius: 4px;
`

export const Text = styled.span`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray600};
  line-height: 16px;
`
