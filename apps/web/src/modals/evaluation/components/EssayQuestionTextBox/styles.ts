import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  background-color: ${(props) => props.theme.colors.neutralGray50};
  border-radius: 6px;

  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  padding: 0 16px;
`

export const Text = styled.span`
  color: ${(props) => props.theme.colors.neutralGray500};
`

export const Placeholder = styled.span`
  color: ${(props) => props.theme.colors.neutralGray300};
  margin-left: 4px;
`
