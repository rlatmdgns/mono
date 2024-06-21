import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 100px);
  height: 58px;
  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    height: 2px;
  }
`
