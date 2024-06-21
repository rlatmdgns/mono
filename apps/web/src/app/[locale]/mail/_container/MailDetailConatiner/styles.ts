import styled from 'styled-components'

export const Wrapper = styled.section`
  flex: 1;
  min-width: 555px;
  padding: 0 20px;
  height: 100vh;
  border-left: 1px solid ${(props) => props.theme.colors.neutralGray200};
  overflow: auto;
`
