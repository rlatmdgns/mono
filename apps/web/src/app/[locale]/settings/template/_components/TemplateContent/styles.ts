import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  padding: 0 20px;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TabArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    border: 0;
  }
`
export const Tab = styled.div`
  li {
    flex: none;
    flex-shrink: 0;
    padding: 0 16px;
  }
`
