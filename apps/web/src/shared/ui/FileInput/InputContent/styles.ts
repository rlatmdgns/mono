import styled from 'styled-components'

export const Wrapper = styled.label<{ $isReadOnly?: boolean }>`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.neutralGray200};
  padding: 0 4px 0 12px;
  pointer-events: ${(props) => props.$isReadOnly && 'none'};
  cursor: pointer;

  button {
    pointer-events: none;
    margin-left: 8px;
  }
`

export const Input = styled.input`
  display: none;
`

export const Placeholder = styled.span`
  color: ${(props) => props.theme.colors.neutralGray400};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`
