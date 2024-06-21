import styled from 'styled-components'

export const Wrapper = styled.div`
  overflow: hidden;
  width: 576px;
  height: 100%;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.neutralGray50};
  border-radius: 8px;
`
