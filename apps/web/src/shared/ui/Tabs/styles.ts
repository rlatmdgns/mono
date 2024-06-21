import styled, { css } from 'styled-components'
import { TriggerStates } from '@/shared/ui/Tabs/Tabs.interface'

interface TabsWrapperProps {
  state: TriggerStates
}

interface TriggerProps {
  $state?: TriggerStates
  selectedTab?: number
  $isActive: boolean
  disabled?: boolean
  $color: string
  $backgroundColor: string
  $boxShadow?: string
  $borderColor?: string
}

interface PanelListProps {
  $height?: string
}

export const TabsWrapper = styled.div<TabsWrapperProps>`
  width: 100%;
  height: auto;
`

export const TriggerList = styled.ul<{ $state: string; $height?: number }>`
  display: flex;
  align-items: center;
  flex: 1 0 0;
  height: ${(props) => (props.$height ? `${props.$height}px` : 'auto')};
  padding: ${(props) => (props.$state === 'border' ? '0px' : '6px')};
  background-color: ${(props) =>
    props.$state === 'border' ? props.theme.colors.white : props.theme.colors.neutralGray100};
  border-bottom: ${(props) =>
    props.$state === 'border' && `1px solid ${props.theme.colors.neutralGray200}`};
  border-radius: 6px;
`

export const Trigger = styled.li<TriggerProps>`
  display: flex;
  flex: 1 0 0;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 7px 0;
  position: relative;
  height: 100%;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) =>
    props.$isActive ? props.theme.colors[props.$color] : props.theme.colors.neutralGray400};
  background-color: ${(props) =>
    props.$isActive ? props.theme.colors[props.$backgroundColor] : 'transparent'};
  box-shadow: ${(props) => (props.$isActive ? props.$boxShadow : 'none')};
  border-radius: 4px;
  transition: ease-out 300ms;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.$state === 'border' &&
    css`
      &:after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        z-index: ${(props) => props.theme.zIndexes.overlay};
        width: 100%;
        height: 3px;
        border-radius: 100px;
        background: ${props.$isActive
          ? props.theme.colors[props.$borderColor || '']
          : 'transparent'};
      }
    `}
`

export const PanelList = styled.div<PanelListProps>`
  width: 100%;
  height: ${(props) => props.$height && props.$height};
`

export const Panel = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`
