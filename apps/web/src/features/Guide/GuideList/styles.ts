import styled from 'styled-components'

export const GuideList = styled.ul<{ $isOpen?: boolean }>`
  position: absolute;
  bottom: 70px;
  right: -310px;
  z-index: ${(props) => props.theme.zIndexes.floatingButton};
  visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  transform: ${(props) => (props.$isOpen ? 'translate(0, 0)' : 'translate(80px, 0)')};
  transition: all 0.3s;
`

export const GuideCloseBtn = styled.button`
  width: 56px;
  height: 56px;
  background: ${(props) => props.theme.colors.blue500};
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px;
  svg {
    color: #fff;
  }
`
