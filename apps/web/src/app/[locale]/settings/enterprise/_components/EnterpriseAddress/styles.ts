import styled from 'styled-components'

export const Input = styled.button`
  width: 268px;
  height: 40px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.neutralGray100};
  border-radius: 6px;
  resize: none;
  ${(props) => props.theme.fonts[12]};
`

export const NoText = styled.p`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.neutralGray400};

  &::before {
    content: '';
  }
`
