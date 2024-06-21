import styled from 'styled-components'
import { WrapperProps } from './Avatar.interface'

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: cover;
    border-radius: 50%;
  }

  border: ${(props) => props.$isBorder && `1px solid ${props.theme.colors.white}`};
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  flex: 0 0 ${(props) => props.$size}px;
  border-radius: 50%;
  overflow: hidden;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : 0)}px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  background: ${(props) => props.$background};

  ${(props) =>
    props.$disabled &&
    `
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${props.theme.colors.white};
      border-radius: 50%;
      opacity: 0.8;
    }
  `}
`
