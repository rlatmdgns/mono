import styled from 'styled-components'

interface WrapperProps {
  $isComment?: boolean
}

export const Wrapper = styled.textarea<WrapperProps>`
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.neutralGray200};
  border-radius: 6px;
  color: ${(props) => props.theme.colors.neutralGray800};
  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  padding: 12px;
  margin-top: ${(props) => props.$isComment && '8px'};
  outline: none;
  resize: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.neutralGray400};
  }
`
