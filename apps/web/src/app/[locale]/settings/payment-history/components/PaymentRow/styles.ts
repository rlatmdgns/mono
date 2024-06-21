import styled from 'styled-components'
import { PAYMENT_LOG_HEADERS } from '@/app/[locale]/settings/payment-history/container/HistoryContainer/HistoryContainer.constant'

export const NoData = styled.div`
  padding: 14px 0;
  ${(props) => props.theme.fonts[14]}
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};
  text-align: center;
`
export const Rows = styled.div<{ $isThead?: boolean }>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${PAYMENT_LOG_HEADERS.length}, 1fr)`};
  padding: 14px 0;
  ${(props) => props.theme.fonts[14]}
  font-weight: ${(props) => props.theme.fontWeights.medium};
  border-bottom: ${(props) => props.$isThead && `1px solid ${props.theme.colors.neutralGray100}`};
  color: ${(props) =>
    props.$isThead ? props.theme.colors.neutralGray400 : props.theme.colors.neutralGray800};
`

export const Cell = styled.div`
  padding: 0 10px;

  a {
    color: ${(props) => props.theme.colors.blue500};
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
  }
`
