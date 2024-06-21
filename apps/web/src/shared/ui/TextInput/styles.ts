import styled from 'styled-components'

interface TextInputProps {
  $width?: string
  $state?: 'success' | 'error'
}

export const InputContainer = styled.div`
  position: relative;
  background: transparent;
`

export const Input = styled.input<TextInputProps>`
  padding: 12px;
  width: ${(props) => props.$width};
  height: 40px;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.neutralGray200};
  border-radius: 6px;

  &::placeholder {
    ${(props) => props.theme.fonts[14]};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    color: ${(props) => props.theme.colors.neutralGray400};
  }

  &:focus {
    border: 1px solid
      ${(props) =>
        props.$state === 'error' ? props.theme.colors.red500 : props.theme.colors.blue500};
    box-shadow: ${(props) =>
      props.$state === 'error'
        ? '0 2px 10px 0 rgba(255, 91, 70, 0.20)'
        : '0 2px 10px 0 rgba(70, 142, 255, 0.2)'};
    outline: none;
  }

  &:hover:not(:focus, &:disabled) {
    border-color: ${(props) => props.theme.colors.neutralGray400};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.neutralGray100};
    cursor: not-allowed;

    &::placeholder {
      color: ${(props) => props.theme.colors.neutralGray400};
    }
  }
`

export const RemoveButtonBox = styled.div`
  position: absolute;
  top: 50%;
  right: 12px;
  height: 16px;
  transform: translateY(-50%);
  z-index: 2;
`
