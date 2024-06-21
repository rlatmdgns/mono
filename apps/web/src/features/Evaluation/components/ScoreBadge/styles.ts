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
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.blue500};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  line-height: 16px;
`
export const Percentage = styled.span`
  ${(props) => props.theme.fonts[12]};
  line-height: 16px;
  color: ${(props) => props.theme.colors.blue400};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-left: 2px;
`
