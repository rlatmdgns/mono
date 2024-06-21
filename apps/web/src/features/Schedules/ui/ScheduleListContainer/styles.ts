import styled from 'styled-components'

export const ScheduleListContainer = styled.div`
  width: 15%;
  margin-top: 65px;
  padding: 24px;
  height: calc(100vh - 290px);
  overflow-y: scroll;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 0 6px 6px 0;
`
