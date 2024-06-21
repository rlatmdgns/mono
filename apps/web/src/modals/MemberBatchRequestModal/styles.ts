import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: unset;
  max-height: 90%;
  width: 520px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  z-index: ${(props) => props.theme.zIndexes.modal};
`
