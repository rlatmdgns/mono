import styled, { css } from 'styled-components'
import { IMAGES } from '@/shared/constants'

type TooltipProps = {
  $top?: number
  $left?: number
  $direction?: 'top' | 'bottom' | 'left' | 'right'
  $isTextOverflow?: boolean
  $isLineThrough?: boolean
}

export const TooltipWrapper = styled.div<{ $isOverflow: boolean }>`
  display: ${(props) => (props.$isOverflow ? 'flex' : 'block')};
  width: ${(props) => (props.$isOverflow ? '95%' : 'auto')};
`

export const Tooltip = styled.span<TooltipProps>`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(${({ $left }) => $left}px) translateY(${({ $top }) => $top}px);
  width: max-content;
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 6px;
  background: #373d3f;
  ${(props) => props.theme.fonts[12]};
  color: ${(props) => props.theme.colors.white};
  text-decoration: ${(props) => props.$isLineThrough && 'line-through'};
  z-index: ${(props) => props.theme.zIndexes.tooltip};

  &:after {
    position: absolute;
    display: block;
    width: 5px;
    height: 8px;
    content: '';
    background-image: url('${IMAGES.TOOLTIP_ARROW}');
    background-repeat: no-repeat;
    ${(props) => getDirection(props.$direction)}
  }
`

export const Icon = styled.span`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
`

const getDirection = (direction?: string) => {
  switch (direction) {
    case 'top':
      return css`
        left: 50%;
        bottom: -6px;
        transform: translateX(-50%) rotate(-90deg);
      `
    case 'left':
      return css`
        right: -5px;
        top: 50%;
        transform: translateY(-50%) rotate(180deg);
      `
    case 'right':
      return css`
        left: -5px;
        top: 50%;
        transform: translateY(-50%);
      `
    case 'bottom':
      return css`
        left: 50%;
        top: -6px;
        transform: translateX(-50%) rotate(90deg);
      `
  }
}
