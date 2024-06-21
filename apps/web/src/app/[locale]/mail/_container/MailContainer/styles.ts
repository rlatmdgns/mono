import styled from 'styled-components'

export const Wrapper = styled.section`
  position: relative;
  flex: 0.7;
  min-width: 412px;
  height: 100vh;
  padding: 0 20px;
  border-left: 1px solid ${(props) => props.theme.colors.neutralGray200};
`

export const MailListWrapper = styled.div`
  height: calc(100vh - 159px);
  overflow-y: overlay;
`
