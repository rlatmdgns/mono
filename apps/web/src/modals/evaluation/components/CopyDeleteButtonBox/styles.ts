import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: calc(100% + 8px);
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.neutralGray100};
  border-radius: 8px;
  box-shadow: 0 12px 40px 0 rgba(161, 176, 203, 0.3);
  padding: 8px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 6px;
  padding: 0 8px;

  &:hover {
    filter: brightness(0) saturate(100%) invert(67%) sepia(11%) saturate(364%) hue-rotate(173deg)
      brightness(87%) contrast(84%);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
