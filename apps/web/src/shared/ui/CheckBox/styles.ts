import styled, { css } from 'styled-components'
import { BoxStylesProps, StylesProps } from '@/shared/ui/CheckBox/CheckBox.interface'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
export const Label = styled.label<StylesProps>`
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => props.$disabled && '0.3'};

  &:hover {
    ${(props) =>
      !props.$disabled &&
      css`
        background-color: ${!props.$isChecked && props.theme.colors.blue100};

        & > span {
          border: none;

          & > div {
            border: ${!props.$isChecked && `1px solid ${props.theme.colors.blue500}`};
          }
        }
      `}
  }
`

export const Container = styled.span<BoxStylesProps>`
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: ${(props) => !props.$isChecked && `1px solid ${props.theme.colors.blue500}`};
`

export const Inner = styled.div<BoxStylesProps>`
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${(props) => props.$isChecked && props.theme.colors.blue500};
`

export const Input = styled.input`
  display: none;
`

export const Text = styled.span`
  margin-left: 4px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};
  ${(props) => props.theme.fonts[14]};
`
