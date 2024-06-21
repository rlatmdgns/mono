import styled from 'styled-components'

export const Wrapper = styled.ul<{
  $top: number
  $left: number
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 240px;
  max-height: 170px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 40px 0 rgba(161, 176, 203, 0.3);
  transform: ${(props) => `translateX(${props.$left}px) translateY(calc(-100% + ${props.$top}px))`};
  overflow-y: auto;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
`

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${(props) => props.theme.zIndexes.tooltip};
`
