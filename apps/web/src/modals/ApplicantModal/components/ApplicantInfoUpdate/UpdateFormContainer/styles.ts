import styled from 'styled-components'

interface ContainerProps {
  $top?: number
  $left?: number
}

export const Background = styled.div<{ $isNotPortal?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${(props) => props.theme.zIndexes.modalDropdown};
`

export const Container = styled.div<ContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  transform: ${(props) => `translateX(${props.$left}px) translateY(${props.$top}px)`};
`

export const Form = styled.form``
