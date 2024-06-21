import styled from 'styled-components'

export const PaymentContainer = styled.div`
  position: relative;
  width: 609px;
  margin: 56px auto 80px;
`

export const PaymentExpired = styled.button`
  display: block;
  margin: 28px auto;
  ${(props) => props.theme.fonts[14]};
  color: ${(props) => props.theme.colors.neutralGray600};
`
