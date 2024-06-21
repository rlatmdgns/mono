import styled from 'styled-components'

interface ContainerProps {
  $top?: number
  $left?: number
}

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${(props) => props.theme.zIndexes.modalDropdown};
`

export const Content = styled.div<ContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 194px; 
  transform: ${(props) => `translateX(${props.$left}px) translateY(${props.$top}px)`};
)
translateY(${(props) => props.$top}px);
`

export const Form = styled.form``
