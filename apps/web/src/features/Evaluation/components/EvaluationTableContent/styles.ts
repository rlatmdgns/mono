import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`

export const Item = styled(Wrapper)`
  padding: 0;

  & > dl {
    padding: 16px;
  }
`
