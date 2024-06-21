import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const LabelText = styled.div`
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Textarea = styled.textarea<{
  $state?: 'success' | 'error'
}>`
  width: 100%;
  height: 120px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.neutralGray200};
  border-radius: 6px;
  padding: 8px 12px;
  color: ${(props) => props.theme.colors.neutralGray700};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  resize: none;
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.neutralGray400};
  }

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.neutralGray100};
  }

  &::-webkit-scrollbar-thumb {
    border: 4px solid ${(props) => props.theme.colors.neutralGray300};
  }

  &:hover:not(:disabled, :focus) {
    border-color: ${(props) => props.theme.colors.neutralGray400};
  }

  &:focus {
    border: 1px solid
      ${(props) =>
        props.$state === 'error' ? props.theme.colors.red500 : props.theme.colors.blue500};
    box-shadow: ${(props) =>
      props.$state === 'error'
        ? '0 2px 10px 0 rgba(255, 91, 70, 0.20)'
        : '0 2px 10px 0 rgba(70, 142, 255, 0.2)'};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.neutralGray100};
    cursor: not-allowed;

    &::placeholder {
      color: ${(props) => props.theme.colors.neutralGray400};
    }
  }
`

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SupportiveBox = styled.div`
  display: flex;
  gap: 4px;
`

export const SupportiveText = styled.div`
  width: calc(100% - 20px);
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.red500};
`

export const CountBox = styled.div`
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray400};
  margin-left: auto;
`

export const CurrentCount = styled.span`
  color: ${(props) => props.theme.colors.neutralGray800};

  &::after {
    content: '/';
    margin: 0 2px;
  }
`
