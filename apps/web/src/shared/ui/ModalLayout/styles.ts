import styled from 'styled-components'

export const ModalLayout = styled.div<{ $isDimmed?: boolean; $zIndex?: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => (props.$isDimmed ? 'rgba(0, 0, 0, 0.5)' : 'transparent')};
  z-index: ${(props) => props.$zIndex || props.theme.zIndexes.modal};
`
