import styled, { css } from 'styled-components'

interface ChildrenBoxProps {
  $isPoint?: boolean
  $isFocused?: boolean
}

interface InputProps extends ChildrenBoxProps {
  $isTitle?: boolean
  $isDescription?: boolean
}

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
`

export const Label = styled.label`
  display: none;
  color: ${(props) => props.theme.colors.blue500};
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  padding-top: 8px;
`

export const ChildrenBox = styled.div<ChildrenBoxProps>`
  display: ${(props) => (props.$isPoint ? 'flex' : 'none')};
  position: absolute;
  bottom: 0;
  right: 0;
  color: ${(props) => props.theme.colors.neutralGray500};
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`

export const Input = styled.input<InputProps>`
  height: 16px;
  border: none;
  color: ${(props) =>
    props.$isDescription ? props.theme.colors.neutralGray500 : props.theme.colors.neutralGray800};
  ${(props) => (props.$isTitle ? props.theme.fonts[16] : props.theme.fonts[14])};
  line-height: 16px;
  font-weight: ${(props) =>
    props.$isDescription ? props.theme.fontWeights.medium : props.theme.fontWeights.semiBold};
  padding: ${(props) => props.$isPoint && '0 32px 0 0'};
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.neutralGray300};
    font-weight: ${(props) => props.theme.fontWeights.medium};
  }

  &:not(:focus):hover {
    ${(props) =>
      props.$isDescription &&
      css`
        &::placeholder {
          color: ${(props) => props.theme.colors.blue500};
        }
      `}
  }

  &:focus {
    height: initial;
    border-bottom: 1px solid ${(props) => props.theme.colors.blue500};
    color: ${(props) => props.$isDescription && props.theme.colors.neutralGray800};
    padding: ${(props) => (props.$isPoint ? '8px 32px 8px 0' : '8px 0')};

    & + ${Label} {
      display: block;
    }

    & ~ ${ChildrenBox} {
      bottom: 8px;
    }
  }
`
