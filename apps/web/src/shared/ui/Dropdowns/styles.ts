import styled from 'styled-components'
import { getTransformXRight } from '@/shared/ui/Dropdowns/HoverDropdown.function'

interface DropdownButtonIcon {
  $isOpen: boolean
}

interface DropdownMenuProps {
  $isNotPortal?: boolean
  $zIndex?: number
}

interface DropdownItemProps {
  $disabled: boolean
  $size: 'md' | 'lg'
  $isWarning?: boolean
}

interface HoverDropdownMenuProps {
  $direction: 'left' | 'right'
  $top?: number
  $left?: number
  $containContainerLeft?: number
  $isNotPortal?: boolean
}

export const DropdownWrapper = styled.div`
  position: relative;
`

export const DropdownButtonBox = styled.div`
  position: relative;
`

export const DropdownButtonIcon = styled.div<DropdownButtonIcon>`
  position: absolute;
  top: 0;
  right: 0;
  width: 16px;
  height: 16px;
  transform: rotate(${({ $isOpen }) => ($isOpen ? '180deg' : '0deg')});
`

export const DropdownMenu = styled.div<DropdownMenuProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: ${(props) =>
    props.$isNotPortal ? props.theme.zIndexes.modalDropdown : props.$zIndex || 'auto'};
`

export const DropdownMenuContainer = styled.div`
  position: absolute;
  display: flex;
  width: auto;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.neutralGray100};
  border-radius: 8px;
  box-shadow: 5px 5px 15px 0 rgba(75, 75, 75, 0.07);
  padding: 8px;
  z-index: 1;
`

export const Item = styled.div<DropdownItemProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: ${(props) => (props.$size === 'md' ? '140px' : '184px')};
  height: ${(props) => (props.$size === 'md' ? '40px' : '44px')};
  border-radius: 6px;
  color: ${(props) =>
    props.$isWarning ? props.theme.colors.red500 : props.theme.colors.neutralGray800};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  padding: 8px;
  opacity: ${(props) => props.$disabled && '0.3'};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => !props.$disabled && props.theme.colors.neutralGray50};
  }

  label,
  button {
    pointer-events: ${(props) => props.$disabled && 'none'};
  }
`

export const Divider = styled.span`
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray100};
  margin: 2px 0;
`

export const HoverDropdownMenu = styled.div<HoverDropdownMenuProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.neutralGray100};
  border-radius: 8px;
  box-shadow: -6px 0 26px rgba(230, 238, 244, 0.8);
  padding: 8px;
  transform: translateX(
      ${({ $direction, $left, $containContainerLeft }) =>
        $direction === 'left' ? `${$left}px` : getTransformXRight($containContainerLeft)}
    )
    translateY(${({ $top }) => $top}px);
  overflow: hidden;
  z-index: ${(props) =>
    props.$isNotPortal ? props.theme.zIndexes.modalDropdown : props.theme.zIndexes.dropdown};
`
