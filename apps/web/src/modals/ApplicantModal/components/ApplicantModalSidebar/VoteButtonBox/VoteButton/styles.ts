import styled from 'styled-components'

export const Wrapper = styled.div<{ $isFold?: boolean }>`
  width: 100%;
  padding-left: ${(props) => props.$isFold && '2px'};
`
