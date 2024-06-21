import styled from 'styled-components'

export const NextPayment = styled.button<{ $isNextPayment: boolean }>`
  display: flex;
  width: 100%;
  gap: 12px;
  align-items: center;
  margin-bottom: 16px;
  padding: 12px 12px 12px 16px;
  border-radius: 9px;
  ${(props) => props.theme.fonts[14]};
  border: ${(props) => `1px solid ${props.theme.colors.neutralGray100}`};
  color: ${(props) => props.theme.colors.neutralGray900};
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 2px 30px 0 rgba(194, 205, 225, 0.18);
  font-weight: ${(props) => props.theme.fontWeights.medium};
  cursor: ${(props) => (props.$isNextPayment ? 'auto' : 'pointer')};
`

export const ArrowIconBox = styled.div`
  width: 16px;
  height: 16px;
  margin-left: auto;
`
