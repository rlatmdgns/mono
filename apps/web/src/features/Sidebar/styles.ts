import styled from 'styled-components'

export const Wrapper = styled.aside<{ $width: string }>`
  position: relative;
  display: flex;
  width: ${(props) => props.$width}px;
  max-width: 650px;
  height: 100vh;
  flex-direction: column;
  background: ${(props) => props.theme.colors.neutralGray50};
  border-right: 1px solid ${(props) => props.theme.colors.neutralGray200};
`

export const Content = styled.div`
  display: flex;
  width: calc(100% - 35px);
  flex-direction: column;
  flex: 1;
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray200};
  margin: 0 auto;
`

export const ResizeBar = styled.div`
  cursor: col-resize;
  position: absolute;
  top: 0;
  padding: 0 6px;
  right: -8px;
  bottom: 0;
  z-index: ${(props) => props.theme.zIndexes.dropdown};

  &:before {
    display: block;
    width: 2px;
    content: '';
    background: transparent;
    height: 100%;
  }

  &:hover:before {
    background: ${(props) => props.theme.colors.blue200};
  }
`
