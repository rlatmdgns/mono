import styled from 'styled-components'

export const Wrapper = styled.div`
  &:before {
    content: '';
    position: fixed;
    inset: 10px;
    background: red;
    z-index: 9999999;
  }
`
