import styled from 'styled-components'

export const Button = styled.button`
  position: absolute;
  top: 60px;
  right: -32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 64px;
  background: ${(props) => props.theme.colors.neutralGray100};
  border-radius: 0 8px 8px 0;

  &:hover {
    background: ${(props) => props.theme.colors.blue100};
  }
`
