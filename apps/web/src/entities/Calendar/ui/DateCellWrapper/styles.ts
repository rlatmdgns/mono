import styled from 'styled-components'

export const Wrapper = styled.div<{ $isBefore: boolean }>`
  width: 100%;
  height: 100%;
  background: ${(props) => props.$isBefore && '#f7f7f7'};
  border: none;
`
