import styled from 'styled-components'

export const Item = styled.li<{ $disabled: boolean }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  width: 286px;
  border-radius: 6px;
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.neutralGray50};
  }
`
