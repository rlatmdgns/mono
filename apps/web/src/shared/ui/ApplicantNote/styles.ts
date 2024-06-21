import styled from 'styled-components'

export const Placeholder = styled.div<{ $note: string }>`
  position: relative;
  display: flex;
  gap: 4px;
  margin: 0 0 12px;
`

export const Input = styled.input<{ $note: string }>`
  padding: 0;
  width: ${(props) => (!props.$note ? '139px' : '100%')};
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray600};
  background-color: transparent;
  border: none;
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.neutralGray400};
  }
`

export const Note = styled.p`
  margin: -4px 0 12px 0;
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray600};
`
