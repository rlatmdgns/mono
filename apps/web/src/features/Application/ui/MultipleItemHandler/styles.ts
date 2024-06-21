import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 12px;
`

export const Button = styled.button`
  width: 24px;
  height: 24px;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 4px;
  padding: 4px;

  svg {
    pointer-events: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`
