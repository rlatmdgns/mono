import styled from 'styled-components'
import { SwitchLabelProps, SwitchToggleProps } from './Switch.interface'

export const Input = styled.input`
  display: none;
`

export const Label = styled.label<SwitchLabelProps>`
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  width: ${(props) => `${props.$width[props.$size]}px`};
  height: ${(props) => `${props.$height[props.$size]}px`};
  background-color: ${(props) => `${props.theme.colors[props.$backgroundColor]}`};
  border-radius: 32px;
  padding: 4px;
  transition: background-color 400ms ease-in-out;
  opacity: ${(props) => props.$isDisabled && '0.5'};
  cursor: ${(props) => (props.$isDisabled ? 'not-allowed' : 'pointer')};
`

export const Toggle = styled.span<SwitchToggleProps>`
  width: ${(props) => `${props.$toggle[props.$size]}px`};
  height: ${(props) => `${props.$toggle[props.$size]}px`};
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => !props.$isDisabled && '0px 4px 16px 0px rgba(126, 148, 189, 0.40)'};
  border-radius: 50%;
  transform: ${(props) =>
    props.$isChecked ? `translateX(${props.$transformX[props.$size]}px)` : 'none'};
  transition: transform 400ms ease-in-out;
`
