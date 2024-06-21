import styled from 'styled-components'

export const PaymentList = styled.div<{ $isSubscribed: boolean }>`
  padding: 64px;
  border-radius: 8px;
  border: ${(props) => `1px solid ${props.theme.colors.neutralGray100}`};
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 20px 40px 0 rgba(161, 176, 203, 0.1);
`

export const Plan = styled.div`
  text-align: center;
`
export const Title = styled.h3`
  margin-bottom: 6px;
  ${(props) => props.theme.fonts[20]};
  font-weight: ${(props) => props.theme.fontWeights.bold};

  &:before {
    content: '💡';
    display: block;
    margin: 0 auto 10px;
  }
`

export const Desc = styled.p`
  ${(props) => props.theme.fonts[14]}
  color: ${(props) => props.theme.colors.neutralGray600};
`
