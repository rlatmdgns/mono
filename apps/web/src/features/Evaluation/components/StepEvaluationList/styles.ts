import styled from 'styled-components'

export const Wrapper = styled.div`
  height: calc(100% - 64px);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  overflow-y: auto;

  & > div > div {
    display: block !important;
    width: 100%;
  }
`
