import styled from 'styled-components'

export const ToggleButton = styled.button<{ $isBoardView: boolean }>`
  position: relative;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 40px;
  padding: 4px;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.neutralGray100};

  svg {
    z-index: 1;
  }

  &:after {
    position: absolute;
    left: 4px;
    content: '';
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 6px;
    background: ${(props) => props.theme.colors.white};
    transition: 0.2s;
    transform: translateX(${(props) => (props.$isBoardView ? '0' : '32px')});
  }
`
