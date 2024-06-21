import styled from 'styled-components'

export const MailBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 44px 0 0 0;
`

export const Domain = styled.span`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray900};
`
