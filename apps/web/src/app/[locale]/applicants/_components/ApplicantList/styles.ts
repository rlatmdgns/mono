import styled from 'styled-components'

export const Wrapper = styled.ul`
  padding: 0 36px 120px 40px;
  max-height: calc(100vh - 156px);
  background: ${(props) => props.theme.colors.white};
  overflow-y: auto;
`

export const Target = styled.li`
  height: 1px;
`
