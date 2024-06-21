import styled from 'styled-components'

interface WrapperProps {
  $isFold: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  max-width: ${(props) => (props.$isFold ? 'calc(100% - 56px)' : 'calc(100% - 260px)')};
  flex-grow: 1;
  transition: max-width 0.3s ease-in-out;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 58px;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
`

export const Container = styled.div`
  height: calc(100% - 58px);
  display: flex;
  overflow-x: auto;
`

export const Content = styled.div`
  width: 100%;
  min-width: 560px;
`

export const PDFWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1152px;
  height: 1150px;
  opacity: 0;
  z-index: -1;
  overflow-y: auto;
`

export const PDFContainer = styled.div`
  overflow-y: auto;
`
