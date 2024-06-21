import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 548px;
`

export const ConfirmText = styled.div`
  padding: 24px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 8px 8px 0 0;
  ${(props) => props.theme.fonts[18]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`
