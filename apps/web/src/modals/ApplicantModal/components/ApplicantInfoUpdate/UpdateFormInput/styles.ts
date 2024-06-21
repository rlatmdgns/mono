import styled from 'styled-components'

export const Wrapper = styled.div<{ $isFocus: boolean }>`
  display: flex;
  align-items: center;
  min-width: 224px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid
    ${(props) => (props.$isFocus ? props.theme.colors.blue500 : props.theme.colors.neutralGray100)};
  border-radius: 6px;
  box-shadow: 0 12px 40px 0 rgba(161, 176, 203, 0.3);
  padding: 10px 12px;
  gap: 8px;

  &:hover {
    border-color: ${(props) => props.theme.colors.blue500};
  }
`

export const Input = styled.input`
  width: 152px;
  color: ${(props) => props.theme.colors.neutralGray800};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  border: 0;
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.neutralGray400};
  }
`

export const Button = styled.button`
  height: 24px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.colors.blue500};
  border-radius: 2px;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  padding: 0 10px;

  &:disabled {
    opacity: 0.6;
  }
`
