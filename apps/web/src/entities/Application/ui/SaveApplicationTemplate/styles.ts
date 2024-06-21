import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  padding: 16px;
  margin-top: 24px;
`

export const Text = styled.p`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};
`
