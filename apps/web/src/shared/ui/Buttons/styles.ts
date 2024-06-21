import {
  getActiveStyle,
  getHoverStyle,
  getSizeStyle,
  getStyle,
} from '@/shared/ui/Buttons/Button.functions'
import {
  IconBoxButtonStyleProps,
  IconButtonStyleProps,
  StyleProps,
} from '@/shared/ui/Buttons/Button.interface'
import styled, { css } from 'styled-components'

export const Wrapper = styled.button<StyleProps>`
  display: flex;
  flex-direction: ${(props) => (props.$isIconOnLeft ? 'row' : 'row-reverse')};
  justify-content: center;
  align-items: center;
  width: ${(props) => props.$width};
  border-radius: 6px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  ${(props) => getSizeStyle(props.$size)};
  ${(props) => getStyle(props.$state, props.$style)};
  user-select: none;

  &:disabled {
    opacity: 0.3;
    box-shadow: none;
    cursor: not-allowed;
  }

  &:not(:disabled, :active):hover {
    ${(props) => getHoverStyle(props.$state, props.$style)};
  }

  &:not(:disabled):active {
    ${(props) => getActiveStyle(props.$state, props.$style)};
  }
`

export const Loading = styled.i`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid ${(props) => props.theme.colors.white};
  border-bottom-color: ${(props) => props.theme.colors.blue500};
  border-radius: 50%;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const IconWrapper = styled.button<IconBoxButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  border-radius: 6px;
  ${(props) => getStyle(props.$state, props.$style)};

  &:disabled {
    opacity: 0.3;
    box-shadow: none;
    cursor: not-allowed;
  }

  &:not(:disabled, :active):hover {
    ${(props) => getHoverStyle(props.$state, props.$style)};
  }

  &:not(:disabled):active {
    ${(props) => getActiveStyle(props.$state, props.$style)};
  }
`

export const IconButton = styled.button<IconButtonStyleProps>`
  position: relative;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):hover,
  &:not(:disabled):active {
    filter: ${(props) =>
      props.$state === 'standard'
        ? 'invert(50%) sepia(14%) saturate(1166%) hue-rotate(179deg) brightness(87%) contrast(92%)'
        : ' invert(55%) sepia(87%) saturate(2980%) hue-rotate(197deg) brightness(99%) contrast(105%)'};
  }
`

export const LinkWrapper = styled(Wrapper)<StyleProps>`
  ${(props) =>
    props.$disabled &&
    css`
      pointer-events: none;
      opacity: 0.3;
      box-shadow: none;
      cursor: not-allowed;
    `}
`

export const TextLabel = styled.span`
  flex-shrink: 0;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`
