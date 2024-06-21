import styled, { css } from 'styled-components'

interface WrapperProps {
  $isSelected?: boolean
  $isFocused?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  height: 48px;
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.neutralGray100};
  border-radius: 6px;
  color: ${(props) =>
    props.$isSelected || props.$isFocused
      ? props.theme.colors.blue500
      : props.theme.colors.neutralGray500};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  padding: 0 6px;
  cursor: pointer;

  ${(props) =>
    !props.$isSelected &&
    css`
      &:hover {
        background-color: ${(props) => props.theme.colors.blue100};
        color: ${(props) => props.theme.colors.blue500};
      }
    `}
`

export const Item = styled.span`
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
`
