import styled from 'styled-components'

interface ContainerProps {
  $top?: number
  $left?: number
  $width?: number
}

export const Background = styled.div`
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
  width: ${(props) => props.$width}px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  box-shadow: 0 4px 40px 0 rgba(161, 176, 203, 0.3);
  padding: 16px;
  transform: ${(props) => `translateX(${props.$left}px) translateY(${props.$top}px)`};
`
