import styled from 'styled-components'
import { IMAGES } from '@/shared/constants'

export const Wrapper = styled.div<{
  $isPadding?: boolean
  $isBackground?: boolean
  $isGoogleConnect?: boolean
}>`
  display: flex;
  align-items: center;
  padding: ${(props) => (props.$isPadding ? '6px 8px' : '0')};
  position: relative;
  background: ${(props) =>
    props.$isBackground ? props.theme.colors.neutralGray100 : 'transparent'};
`

export const Name = styled.span`
  max-width: 50px;
  margin: 0 4px 0 8px;
  color: ${(props) => props.theme.colors.neutralGray700};
  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`
