import styled from 'styled-components'

interface BarProps {
  $top: number
}

export const Wrapper = styled.div`
  position: relative;
`

export const Bar = styled.span<BarProps>`
  position: absolute;
  top: ${(props) => props.$top}px;
  right: 0;
  width: 4px;
  height: 48px;
  background-color: ${(props) => props.theme.colors.blue500};
  border-radius: 4px;
  transition: top 0.2s ease-in-out;
`
