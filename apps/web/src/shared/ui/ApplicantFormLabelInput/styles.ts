import styled from 'styled-components'

export const Placeholder = styled.div<{ $title: string }>`
  display: flex;
  position: relative;
  height: 16px;
  margin-bottom: 12px;

  > div {
    min-width: ${(props) => (!props.$title ? '139px' : '100%')};

    input {
      padding: 0;
      height: 16px;
      border: none;

      &:focus {
        border: none;
        box-shadow: none;
      }
    }
  }
`
