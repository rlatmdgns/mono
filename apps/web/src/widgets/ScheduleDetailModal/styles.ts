import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`

export const DetailBody = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 8px;
  width: 680px;
`

export const PrevButton = styled.button<{ disabled: boolean }>`
  position: absolute;
  top: 50%;
  left: -20px;
  width: 40px;
  height: 40px;
  visibility: ${(props) => (props.disabled ? 'hidden' : 'visible')};
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  border: none;
  box-shadow: ${(props) => (props.disabled ? 'none' : '0 4px 30px rgba(194, 205, 225, 0.5)')};
  padding: 10px;
  z-index: ${(props) => props.theme.zIndexes.modal};
  transition: all 0.3s;
  transform: translate(0, -50%);
`
export const NextButton = styled(PrevButton)`
  left: initial;
  right: -20px;
`
