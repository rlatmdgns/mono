import styled from 'styled-components'

export const GuideImage = styled.div<{ $imageIndex: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  left: ${(props) => `${props.$imageIndex * 100}%`};
  box-sizing: border-box;
  padding: 60px 0;
  z-index: 1;
`
