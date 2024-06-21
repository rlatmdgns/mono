import styled from 'styled-components'
import { getInputPadding } from '@/shared/ui/FloatingInput/FloatingInput.function'

export const Wrapper = styled.div``

export const InputBox = styled.div`
  position: relative;

  & > svg {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    z-index: 2;
  }
`

export const Label = styled.label`
  position: absolute;
  left: 44px;
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
  ${(props) => props.theme.fonts[14]};
  color: ${(props) => props.theme.colors.neutralGray500};
  transition: transform 0.3s ease-in-out;
`

export const Input = styled.input<{
  $isError?: boolean
  $stateIcon?: string | null
  $isEye?: boolean
}>`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 48px;
  padding: ${(props) => getInputPadding(props.$stateIcon, props.$isEye)};
  border-radius: 6px;
  border: 1px solid
    ${(props) => (props.$isError ? props.theme.colors.red500 : props.theme.colors.neutralGray300)};
  font-size: 14px;
  color: ${(props) =>
    props.$isError ? props.theme.colors.red500 : props.theme.colors.neutralGray800};
  background-color: transparent;
  outline: none;

  &:focus {
    border: 1px solid
      ${(props) => (props.$isError ? props.theme.colors.red500 : props.theme.colors.blue500)};
  }

  &:focus,
  &:not(:placeholder-shown) {
    padding: ${(props) => getInputPadding(props.$stateIcon, props.$isEye)};
    transform: translateY(0) translate(0);
    transition: all 0.3s ease-in-out;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    font-size: 10px;
    transform: translateY(-100%) translateX(0);
    transition: all 0.3s ease-in-out;
    z-index: 2;
  }
`

export const IconWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0;
  z-index: 1;
`
export const Message = styled.p`
  margin: 10px 0 0 0;
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.red500};
  text-align: left;
`
