import styled from 'styled-components'

export const Wrapper = styled.div<{ $disabled: boolean }>`
  a {
    display: block;
  }

  ${(props) =>
    props.$disabled &&
    `
    a {
      pointer-events: none;
    }
 `}
`
